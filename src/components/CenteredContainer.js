import React from "react";

const CenteredContainer = ({ children }) => (
  <div
    style={{
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center"
    }}
  >
    {children}
  </div>
);

export default CenteredContainer;
