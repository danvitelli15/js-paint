import { Box } from '@mui/material';
import { BaseLayer } from './base-layer/BaseLayer';

export const Canvas = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <BaseLayer />
    </Box>
  );
};
