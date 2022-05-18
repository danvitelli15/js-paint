import { Box, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { RecoilRoot } from 'recoil';
import { Canvas } from './components';

const theme = createTheme({ palette: { mode: 'dark' } });

export function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
          }}
        >
          <Canvas />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
