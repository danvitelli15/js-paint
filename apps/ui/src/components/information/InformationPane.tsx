import { Box } from '@mui/material';
import { informationPaneZIndexRange } from '../../constants/z-indexes';
import { CursorLocationChip } from './CursorLocationChip';
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
      <CursorLocationChip />
    </Box>
  );
};
