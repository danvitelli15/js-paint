import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";

import { WrapperPropTypes } from "../../utilities/interfaces/wrapperPropTypes";
import { darkTheme, lightTheme } from "./themes";

export const ThemeWrapper = ({ children }: WrapperPropTypes) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => createTheme(prefersDarkMode ? darkTheme : lightTheme), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
