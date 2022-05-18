import {
  CanvasCoordinates,
  pixelLayerColorState,
  pixelLayerOpacityState,
} from '../../../model/canvas';
import { useRecoilValue } from 'recoil';
import { Pixel } from '../pixel';

export interface ILayerPixelProps {
  x: number;
  y: number;
  z: number;
}

export const LayerPixel = ({ x, y, z }: ILayerPixelProps) => {
  const color = useRecoilValue(
    pixelLayerColorState(new CanvasCoordinates(x, y, z))
  );
  const opacity = useRecoilValue(
    pixelLayerOpacityState(new CanvasCoordinates(x, y, z))
  );

  return <Pixel color={color} opacity={opacity} />;
};
