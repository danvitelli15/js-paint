import { Box } from '@mui/material';
import { BaseLayer } from './base-layer/BaseLayer';

export const Canvas = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Box sx={{ margin: 'auto' }}>
        <BaseLayer />
      </Box>
    </Box>
  );
};
