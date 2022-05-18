import { canvasBaseState } from '../../../model/canvas';
import { useRecoilValue } from 'recoil';
import { Pixel } from '../pixel';

export const BaseLayerPixel = () => {
  const color = useRecoilValue(canvasBaseState);

  return <Pixel color={color} opacity={1} />;
};
