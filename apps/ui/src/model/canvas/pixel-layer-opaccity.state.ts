import { selectorFamily } from 'recoil';
import { CanvasCoordinates } from '.';
import { IPixelLayerState, pixelLayerState } from './pixel-layer.state';

export const pixelLayerOpacityState = selectorFamily<number, CanvasCoordinates>(
  {
    key: 'pixelLayerOpacityState',
    get:
      (coordinates: CanvasCoordinates) =>
      ({ get }) =>
        get(pixelLayerState(coordinates)).opacity,
    set:
      (coordinates: CanvasCoordinates) =>
      ({ set }, opacityShift) =>
        set(
          pixelLayerState(coordinates),
          (previousState): IPixelLayerState => ({
            ...previousState,
            opacity: previousState.opacity + (opacityShift as number),
          })
        ),
  }
);
