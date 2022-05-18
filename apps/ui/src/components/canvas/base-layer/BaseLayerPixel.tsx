import { Box } from '@mui/material';
import { canvasBaseState } from 'apps/ui/src/model/canvas';
import { useRecoilValue } from 'recoil';

export const BaseLayerPixel = () => {
  const color = useRecoilValue(canvasBaseState);

  return (
    <Box
      component={'span'}
      sx={{ backgroundColor: color, height: '5px', width: '5px' }}
    ></Box>
  );
};
