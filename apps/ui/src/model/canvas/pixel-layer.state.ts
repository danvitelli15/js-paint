import { atomFamily } from 'recoil';
import { CanvasCoordinates } from './canvas-coordinates.model';

export interface IPixelLayerState {
  color: string;
  coordinates: CanvasCoordinates;
  opacity: number;
}

export const pixelLayerState = atomFamily<IPixelLayerState, CanvasCoordinates>({
  key: 'pixelLayerState',
  default: (coordinates: CanvasCoordinates) => ({
    color: '#000000',
    coordinates,
    opacity: 0,
  }),
});
