import { atomFamily, selectorFamily } from 'recoil';
import { CanvasCoordinates } from './canvas-coordinates.model';

export interface IPixelLayerState {
  color: string;
  coordinates: CanvasCoordinates;
  opacity: number;
}

const pixelLayerState = atomFamily<IPixelLayerState, CanvasCoordinates>({
  key: 'pixelLayerState',
  default: (coordinates: CanvasCoordinates) => ({
    color: '#000000',
    coordinates,
    opacity: 0,
  }),
});

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
