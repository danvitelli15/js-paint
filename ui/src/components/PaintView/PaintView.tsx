import { Box } from "@mui/material";
import React from "react";
import { Canvas } from "../Canvas/Canvas";

export const PaintView = () => {
  return (
    <Box sx={{ alignItems: "center", display: "flex", justifyItems: "center", minHeight: "100vh", minWidth: "100vw" }}>
      <Canvas />
    </Box>
  );
};
