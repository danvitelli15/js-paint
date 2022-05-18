import { Box } from '@mui/material';
import { CanvasCoordinates, pixelLayerColorState } from '../../../model/canvas';
import { useRecoilValue } from 'recoil';
import { zoomMultiplierState } from '../../../model/surface';

export interface IPixelProps {
  x: number;
  y: number;
  z: number;
}

export const Pixel = ({ x, y, z }: IPixelProps) => {
  const color = useRecoilValue(
    pixelLayerColorState(new CanvasCoordinates(x, y, z))
  );
  const size = useRecoilValue(zoomMultiplierState);

  return (
    <Box
      component={'span'}
      sx={{ backgroundColor: color, height: `${size}px`, width: `${size}px` }}
    />
  );
};
