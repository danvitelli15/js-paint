import { atom, selectorFamily } from 'recoil';

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
    ({ set }, newLayerState) =>
      set(layersState, (previous) => {
        const layers = [...previous];
        layers[index] = {
          ...previous[index],
          ...(newLayerState as ILayerState),
        };
        return layers;
      }),
});
