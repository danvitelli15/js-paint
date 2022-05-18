import { atom, selector } from 'recoil';

export const zoomMultiplierState = atom<number>({
  key: 'zoomState',
  default: 10,
});

export const zoomDsplayValueSelector = selector<string>({
  key: 'zoomDisplayValueSelector',
  get: ({ get }) => `${get(zoomMultiplierState) * 100}%`,
});
