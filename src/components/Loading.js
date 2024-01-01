import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ marginTop: "16px" }}
      >
        Loading...
      </Typography>
    </div>
  );
};

export default Loading;
