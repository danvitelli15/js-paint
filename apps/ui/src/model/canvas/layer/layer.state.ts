import { atom, selector, selectorFamily } from 'recoil';

export interface ILayerState {
  locked: boolean;
  name: string;
}

const layersState = atom<ILayerState[]>({
  key: 'layersState',
  default: [{ locked: false, name: 'Default' }],
});

export const layerState = selectorFamily<ILayerState, number>({
  key: 'layerState',
  get:
    (index: number) =>
    ({ get }) =>
      get(layersState)[index],
  set:
    (index: number) =>
    ({ get, set }, newLayerState) => {
      if (index >= 0 && index < get(layersState).length) {
        set(layersState, (previous) => {
          const layers = [...previous];
          layers[index] = {
            ...previous[index],
            ...(newLayerState as ILayerState),
          };
          return layers;
        });
      }
    },
});

export const layersInfoSelector = selector<ILayerState[]>({
  key: 'layersInfoSelector',
  get: ({ get }) => get(layersState),
});

export const numberOfLayersSelector = selector<number>({
  key: 'numberOfLayersSelector',
  get: ({ get }) => get(layersState).length,
});
