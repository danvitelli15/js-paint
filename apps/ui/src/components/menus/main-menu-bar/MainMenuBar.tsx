import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { menuZIndexRange } from 'apps/ui/src/constants/z-indexes';
import SettingsIcon from '@mui/icons-material/Settings';
import { ZoomMenu } from './zoom-menu';

export const MainMenuBar = () => {
  return (
    <AppBar sx={{ zIndex: menuZIndexRange.max }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <ZoomMenu />
        </Box>
        <Box>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
