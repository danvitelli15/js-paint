import { Box } from '@mui/material';
import { informationPaneZIndexRange } from '../../constants/z-indexes';
import { CursorLocation } from './CursorLocation';
import { WindowDimensionChip } from './WindowDimensionChip';

export const InformationPane = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 2,
        left: 2,
        zIndex: informationPaneZIndexRange.min,
      }}
    >
      <WindowDimensionChip />
      <CursorLocation />
    </Box>
  );
};
