import { useEffect, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

export interface ISurfaceDimensions {
  height: number;
  width: number;
}

const surfaceDimensionsState = atom<ISurfaceDimensions>({
  key: 'surfaceDimensionsState',
  default: { height: window.innerHeight, width: window.innerWidth },
});

export const useSurfaceDimensions = () => {
  const [surfaceDimensions, setSurfaceDimensions] = useRecoilState(
    surfaceDimensionsState
  );

  const updateSurfaceDimensions = useMemo(
    () => () => {
      setSurfaceDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    },
    [setSurfaceDimensions]
  );

  useEffect(() => {
    window.addEventListener('resize', updateSurfaceDimensions);
    return () => {
      window.removeEventListener('resize', updateSurfaceDimensions);
    };
  }, [updateSurfaceDimensions]);

  return surfaceDimensions;
};
