import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

const NotFound = () => {
  return (
    <CenteredContainer>
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Typography variant="h4" gutterBottom>
          404 - Bulunamadı
        </Typography>
        <Typography variant="body1" paragraph>
          Hay aksi! Aradığınız sayfa bulunamadı.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/basvuru-olustur">
          Ana Sayfaya Git
        </Button>
      </Container>
    </CenteredContainer>
  );
};

export default NotFound;
