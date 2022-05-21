import { Mark } from '@mui/base';
import { ReactNode } from 'react';
import { atom, selector } from 'recoil';

const canvasZoomState = atom<IMultiplier>({
  key: 'canvasZoomMultiplierState',
  default: { label: '100%', multiplier: 1, value: 4 },
});

export const canvasZoomDisplayValueSelector = selector<ReactNode>({
  key: 'canvasZoomDisplayValueSelector',
  get: ({ get }) => get(canvasZoomState).label,
});

export const canvasZoomMultiplierSelector = selector<number>({
  key: 'canvasZoomMultiplierSelector',
  get: ({ get }) => get(canvasZoomState).multiplier,
});

export const canvasZoomSliderValueSelector = selector<number>({
  key: 'canvasZoomSliderValueSelector',
  get: ({ get }) => get(canvasZoomState).value,
  set: ({ set }, index) => {
    if (index >= 0 && index < zoomSliderMarks.length)
      set(canvasZoomState, zoomSliderMarks[index as number]);
  },
});

export const canvasZoomSliderIncrementSelector = selector<number>({
  key: 'canvasZoomSliderIncrementSelector',
  get: ({ get }) => get(canvasZoomState).value,
  set: ({ set }, increment) =>
    set(
      canvasZoomSliderValueSelector,
      (previous) => previous + (increment as number)
    ),
});

interface IMultiplier extends Mark {
  multiplier: number;
}

export const zoomSliderMarks: IMultiplier[] = [
  { label: '10%', multiplier: 0.1, value: 0 },
  { label: '25%', multiplier: 0.2, value: 1 },
  { label: '50%', multiplier: 0.5, value: 2 },
  { label: '75%', multiplier: 0.7, value: 3 },
  { label: '100%', multiplier: 1, value: 4 },
  { label: '2x', multiplier: 2, value: 5 },
  { label: '5x', multiplier: 5, value: 6 },
  { label: '25x', multiplier: 25, value: 7 },
  { label: '50x', multiplier: 50, value: 8 },
];
