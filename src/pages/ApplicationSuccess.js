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
  const { applicationResponse } = location.state || {};

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
                  {applicationResponse?.applicationCode}
                </strong>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Ad:</strong>}
              secondary={applicationResponse?.name}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Soyad:</strong>}
              secondary={applicationResponse?.surname}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Yaş:</strong>}
              secondary={applicationResponse?.age}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>TC No:</strong>}
              secondary={applicationResponse?.tcNo}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Başvuru Nedeni:</strong>}
              secondary={applicationResponse?.reasonForApplication}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Adres Bilgisi:</strong>}
              secondary={applicationResponse?.adress}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Fotograflar/Ekler:</strong>}
              secondary={applicationResponse?.attachment}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Başvuru Tarihi:</strong>}
              secondary={convertTimestampToDateString(
                applicationResponse?.createDate
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
