import { selectorFamily } from 'recoil';
import { CanvasCoordinates } from '.';
import { IPixelLayerState, pixelLayerState } from './pixel-layer.state';

export const pixelLayerColorState = selectorFamily<string, CanvasCoordinates>({
  key: 'pixelLayerColorState',
  get:
    (coordinates: CanvasCoordinates) =>
    ({ get }) =>
      get(pixelLayerState(coordinates)).color,
  set:
    (coordinates: CanvasCoordinates) =>
    ({ set }, newColor) =>
      set(
        pixelLayerState(coordinates),
        (previousState): IPixelLayerState => ({
          ...previousState,
          color: newColor as string,
        })
      ),
});
