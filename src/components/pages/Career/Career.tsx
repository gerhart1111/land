import React from "react";
import Feed from "@/components/Feed/Feed";
import { Box } from "@mui/material";

interface CareerProps {
  lng: string;
}

const Career: React.FC<CareerProps> = ({ lng }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Feed lng={lng} />
      </Box>
    </Box>
  );
};

export default Career;
