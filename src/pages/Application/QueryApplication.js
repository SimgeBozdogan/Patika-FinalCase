import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const QueryApplication = () => {
  const navigate = useNavigate();
  const [applicationCode, setApplicationCode] = useState("");

  const handleQuery = async () => {
    navigate(`../basvuru/${applicationCode}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Query Application
      </Typography>
      <TextField
        label="Application Code"
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
        Query
      </Button>
    </Container>
  );
};

export default QueryApplication;
