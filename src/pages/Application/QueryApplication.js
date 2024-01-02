import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import CenteredContainer from "../../components/CenteredContainer";

const QueryApplication = () => {
  const navigate = useNavigate();
  const [applicationCode, setApplicationCode] = useState("");

  const handleQuery = async () => {
    navigate(`../basvuru/${applicationCode}`);
  };

  return (
    <CenteredContainer>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Başvuru Sorgulama
        </Typography>
        <TextField
          label="Başvuru Kodu"
          variant="outlined"
          fullWidth
          margin="normal"
          value={applicationCode}
          onChange={(e) => setApplicationCode(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleQuery}
          style={{ marginTop: "16px" }}
        >
          Sorgula
        </Button>
      </Container>
    </CenteredContainer>
  );
};

export default QueryApplication;
