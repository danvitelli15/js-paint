import React from "react";
import { Box } from "@mui/material";

import { GlobalState, ThemeWrapper } from "./wrappers";

function App() {
  return (
    <GlobalState>
      <ThemeWrapper>
        <Box>Placeholder more</Box>
      </ThemeWrapper>
    </GlobalState>
  );
}

export default App;
