import { atom } from 'recoil';

export interface ICoordinate {
  x: number;
  y: number;
}

export const cursorLocationState = atom<ICoordinate>({
  key: 'cursorLocationState',
  default: { x: 0, y: 0 },
});
