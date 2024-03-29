import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Paper } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllApplications,
  getApplicationById,
} from "../../services/applicationsService";
import Loading from "../../components/Loading";
import CenteredContainer from "../../components/CenteredContainer";

const ViewApplication = () => {
  const { basvuruNo } = useParams();
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        setLoading(true);
        const allApplicationsResponse = await getAllApplications();

        const selectedApplication = allApplicationsResponse.find(
          (element) => element?.applicationCode === basvuruNo
        );
        const selectedApplicationResponse = await getApplicationById(
          selectedApplication.id
        );
        setLoading(false);

        setApplicationData(selectedApplicationResponse);

        toast.success("Başvuru bilgisi başarılı bir şekilde getirildi.");
      } catch (error) {
        console.error(error);
        toast.error("404(bulunamadı)");
        setApplicationData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationData();
  }, [basvuruNo]);

  if (loading && !applicationData) {
    return <Loading />;
  }

  return (
    <CenteredContainer>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Başvuru Detayları
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Başvuru Kodu: {applicationData?.applicationCode}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Ad: {applicationData?.name}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Soyad: {applicationData?.surname}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Başvuru Cevabı: {applicationData?.adminResponse}
          </Typography>
        </Paper>
      </Container>
    </CenteredContainer>
  );
};

export default ViewApplication;
