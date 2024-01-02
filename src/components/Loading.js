import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import CenteredContainer from "./CenteredContainer";

const Loading = () => {
  return (
    <CenteredContainer>
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ marginTop: "16px" }}
      >
        Loading...
      </Typography>
    </CenteredContainer>
  );
};

export default Loading;
