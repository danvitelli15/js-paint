import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { RecoilRoot } from 'recoil';
import { Canvas, InformationPane } from './components';

const theme = createTheme({ palette: { mode: 'dark' } });

export function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Canvas />
        <InformationPane />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
