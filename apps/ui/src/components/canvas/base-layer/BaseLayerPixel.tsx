import { Box } from '@mui/material';
import { canvasBaseState } from '../../../model/canvas';
import { zoomMultiplierState } from '../../../model/surface/zoom-multiplier.state';
import { useRecoilValue } from 'recoil';
import { Pixel } from '../pixel';

export const BaseLayerPixel = () => {
  const color = useRecoilValue(canvasBaseState);

  return <Pixel color={color} opacity={1} />;
};
