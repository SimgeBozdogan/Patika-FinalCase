import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { getAllApplications } from "../../services/applicationsService";
import { applicationStatus } from "../../constants/Application/applicationStatusTypes";
import ApplicationDetailsModal from "../../components/modals/Admin/ApplicationDetailsModal";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { convertTimestampToDateString } from "../../utils/dateUtils";

const AdminApplicationList = () => {
  const [pendingApplications, setPendingApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = AuthService.isLoggedIn();
    if (!isLoggedIn) {
      navigate("/admin");
    }

    const fetchPendingApplications = async () => {
      try {
        setLoading(true);
        const allApplicationsResponse = await getAllApplications();

        const filteredPendingApplications = allApplicationsResponse.filter(
          (element) => element.applicationStatus === applicationStatus.PENDING
        );

        setPendingApplications(filteredPendingApplications);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("404(bulunamadı)");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingApplications();
  }, []);

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Admin Başvuru Listesi
          </Typography>
          {pendingApplications.length === 0 ? (
            <Typography variant="body1">Görüntülenecek Başvuru Yok</Typography>
          ) : (
            <ul>
              {pendingApplications.map((application) => (
                <li key={application.id}>
                  <Typography variant="body1">
                    Başvuru Yapan:{" "}
                    {application.name + " " + application.surname}
                  </Typography>
                  <Typography variant="body2">
                    Başvuru Tarihi: {convertTimestampToDateString(application.createDate)}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewApplication(application)}
                  >
                    Görüntüle
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <ApplicationDetailsModal
            open={openModal}
            onClose={handleCloseModal}
            application={selectedApplication}
          />
        </>
      )}
    </div>
  );
};

export default AdminApplicationList;
