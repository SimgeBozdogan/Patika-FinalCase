// ApplicationDetailsModal.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@material-ui/core";

const ApplicationDetailsModal = ({ open, onClose, application }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Application Details</DialogTitle>
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
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationDetailsModal;
