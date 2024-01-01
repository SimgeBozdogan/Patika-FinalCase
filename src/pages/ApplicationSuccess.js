// ApplicationSuccess.js

import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { convertTimestampToDateString } from "../utils/dateUtils";

const ApplicationSuccess = () => {
  const location = useLocation();
  const { submissionResponse } = location.state || {};

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Başvuru Başarılı
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Teşekkür ederiz! Başvurunuz başarıyla alınmıştır.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Başvuru Detayları:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={<strong>Başvuru Kodu:</strong>}
              secondary={
                <strong style={{ backgroundColor: "aqua" }}>
                  {submissionResponse?.applicationCode}
                </strong>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Ad:</strong>}
              secondary={submissionResponse?.name}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Soyad:</strong>}
              secondary={submissionResponse?.surname}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Yaş:</strong>}
              secondary={submissionResponse?.age}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>TC No:</strong>}
              secondary={submissionResponse?.tcNo}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Başvuru Nedeni:</strong>}
              secondary={submissionResponse?.reasonForApplication}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Adres Bilgisi:</strong>}
              secondary={submissionResponse?.adress}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Fotograflar/Ekler:</strong>}
              secondary={submissionResponse?.attachment}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Başvuru Tarihi:</strong>}
              secondary={convertTimestampToDateString(
                submissionResponse?.createDate
              )}
            />
          </ListItem>
          {/* Add other details as needed */}
        </List>
      </Paper>
    </Container>
  );
};

export default ApplicationSuccess;
