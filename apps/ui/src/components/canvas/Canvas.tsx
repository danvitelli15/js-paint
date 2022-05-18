import { Box } from '@mui/material';
import { BaseLayer } from './base-layer/BaseLayer';
import { InteractionMask } from './interaction-mask/InteractionMask';

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
      <Box sx={{ position: 'relative' }}>
        <BaseLayer />
        <InteractionMask />
      </Box>
    </Box>
  );
};
