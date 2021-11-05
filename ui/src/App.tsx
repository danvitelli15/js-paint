import React from "react";
import { Box } from "@mui/material";

import { GlobalState, ThemeWrapper } from "./wrappers";
import { PaintView } from "./components/PaintView/PaintView";

function App() {
  return (
    <GlobalState>
      <ThemeWrapper>
        <PaintView />
      </ThemeWrapper>
    </GlobalState>
  );
}

export default App;
