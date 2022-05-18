import { Box } from '@mui/material';
import { canvasBaseState } from 'apps/ui/src/model/canvas';
import { zoomMultiplierState } from 'apps/ui/src/model/surface/zoom-multiplier.state';
import { useRecoilValue } from 'recoil';

export const BaseLayerPixel = () => {
  const color = useRecoilValue(canvasBaseState);
  const size = useRecoilValue(zoomMultiplierState);

  return (
    <Box
      component={'span'}
      sx={{ backgroundColor: color, height: `${size}px`, width: `${size}px` }}
    ></Box>
  );
};
