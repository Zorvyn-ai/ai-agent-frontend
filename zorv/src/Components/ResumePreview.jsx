import React from "react";
import { Box, Typography } from "@mui/material";

const ResumePreview = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Typography variant="h5">Resume Preview</Typography>
      <Typography variant="body2" sx={{ mt: 2, color: "#aaa" }}>
        Your resume will be generated here...
      </Typography>
    </Box>
  );
};

export default ResumePreview;
