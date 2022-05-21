import { Box } from '@mui/material';
import { MouseEventHandler, PointerEventHandler } from 'react';
import { useRecoilValue } from 'recoil';
import { canvasZoomMultiplierSelector } from '../../../model/surface';

export interface IPixelProps {
  color: string;
  opacity: number;
  onClick?: MouseEventHandler;
  onPointerEnter?: PointerEventHandler;
}

export const Pixel = ({
  color,
  opacity,
  onClick,
  onPointerEnter,
}: IPixelProps) => {
  const size = useRecoilValue(canvasZoomMultiplierSelector);

  return (
    <Box
      component={'span'}
      sx={{
        backgroundColor: color,
        height: `${size}px`,
        opacity,
        width: `${size}px`,
      }}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
    />
  );
};
