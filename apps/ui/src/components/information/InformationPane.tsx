import { Box } from '@mui/material';
import { informationPaneZIndexRange } from '../../constants/z-indexes';
import { CursorLocation } from './CursorLocation';
import { WindowDimensionChip } from './WindowDimensionChip';

export const InformationPane = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: informationPaneZIndexRange.min,
      }}
    >
      <Box
        component={'span'}
        sx={{ display: 'flex', position: 'absolute', bottom: 2, left: 2 }}
      >
        <WindowDimensionChip />
        <CursorLocation />
      </Box>
    </Box>
  );
};
