import { atom, selector } from 'recoil';

export interface ICanvasShape {
  height: number;
  width: number;
}

const canvasShapeAtom = atom<ICanvasShape>({
  key: 'canvasShapeState',
  default: {
    height: 50,
    width: 50,
  },
});

export const canvasShapeState = selector<ICanvasShape>({
  key: 'canvasShapeGetter',
  get: ({ get }) => get(canvasShapeAtom),
  set: ({ set, get }, newShape) => {
    const toSet: ICanvasShape = get(canvasShapeAtom);
    if ((newShape as ICanvasShape).height > 0)
      toSet.height = (newShape as ICanvasShape).height;
    if ((newShape as ICanvasShape).width > 0)
      toSet.width = (newShape as ICanvasShape).width;
    set(canvasShapeAtom, toSet);
  },
});
