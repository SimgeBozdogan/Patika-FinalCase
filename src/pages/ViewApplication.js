// ViewApplication.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Paper } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSubmissions, getSubmissionById } from "../services/api";
import Loading from "../components/Loading";

const ViewApplication = () => {
  const { basvuruNo } = useParams();
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        setLoading(true);
        const allSubmissionsResponse = await getSubmissions();

        const selectedSubmission = allSubmissionsResponse.find(
          (element) => element?.applicationCode === basvuruNo
        );
        const selectedSubmissionResponse = await getSubmissionById(
          selectedSubmission.id
        );
        setLoading(false);

        setApplicationData(selectedSubmissionResponse);

        // Show success message using toastify
        toast.success("Başvuru bilgisi başarılı bir şekilde getirildi.");
      } catch (error) {
        console.error("404(bulunamadı):", error);

        // Show error message using toastify
        toast.error("404(bulunamadı)");

        // Set applicationData to null to trigger loading state or handle differently
        setApplicationData(null);
      }
    };

    fetchApplicationData();
  }, [basvuruNo]);

  if (loading && !applicationData) {
    return <Loading />;
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Application Details
        </Typography>
        {/* Display application details based on 'applicationData' */}
        <Typography variant="body1" align="center" paragraph>
          Application Code: {applicationData?.applicationCode}
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Name: {applicationData?.name}
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Surname: {applicationData?.surname}
        </Typography>
        {/* Include other application details as needed */}
      </Paper>
    </Container>
  );
};

export default ViewApplication;
