import { atom, selector } from 'recoil';
import { numberOfLayersSelector } from './layer.state';

const activeLayerState = atom<number>({
  key: 'activeLayerState',
  default: 1,
});

export const activeLayerSelector = selector<number>({
  key: 'activeLayerSelector',
  get: ({ get }) => get(activeLayerState),
  set: ({ get, set }, newActiveLayer) => {
    if (newActiveLayer >= 0 && newActiveLayer < get(numberOfLayersSelector)) {
      set(activeLayerState, newActiveLayer);
    }
  },
});
