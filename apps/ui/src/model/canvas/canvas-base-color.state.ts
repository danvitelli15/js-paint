import { atom } from 'recoil';

export const canvasBaseState = atom<string>({
  key: 'canvasBaseState',
  default: '#000000',
});
