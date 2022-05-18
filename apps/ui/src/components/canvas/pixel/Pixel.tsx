import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { zoomMultiplierState } from '../../../model/surface';

export interface IPixelProps {
  color: string;
  opacity: number;
}

export const Pixel = ({ color, opacity }: IPixelProps) => {
  const size = useRecoilValue(zoomMultiplierState);

  return (
    <Box
      component={'span'}
      sx={{
        backgroundColor: color,
        height: `${size}px`,
        opacity,
        width: `${size}px`,
      }}
    />
  );
};
