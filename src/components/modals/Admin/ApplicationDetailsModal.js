import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const ApplicationDetailsModal = ({ open, onClose, application }) => {
  const navigate = useNavigate();

  const handleNavigateToApplication = () => {
    navigate(`/admin/basvuru/${application.applicationCode}`);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Başvuru Detayları</DialogTitle>
      <DialogContent>
        {application && (
          <>
            <Typography>Adres: {application.adress}</Typography>
            <Typography>Yaş: {application.age}</Typography>
            <Typography>
              Başvuru Nedeni: {application.reasonForApplication}
            </Typography>
            <Typography>Soyad: {application.surname}</Typography>
            <Typography>TC No: {application.tcNo}</Typography>
            <Typography>Ad: {application.name}</Typography>
            <Typography>Ek Dosya: {application.attachment}</Typography>
            <Typography>
              {" "}
              Başvuru Kodu: {application.applicationCode}
            </Typography>
            <Typography>
              Başvuru Durumu: {application.applicationStatus}
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNavigateToApplication} color="primary">
          Başvuruya Git
        </Button>
        <Button onClick={onClose} color="primary">
          Kapat
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationDetailsModal;
