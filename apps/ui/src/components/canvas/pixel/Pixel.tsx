import { Box } from '@mui/material';

export interface IPixelProps {
  x: number;
  y: number;
  z: number;
}

export const Pixel = ({ x, y, z }: IPixelProps) => {
  return (
    <Box component={'span'}>
      {x}, {y}, {z}
    </Box>
  );
};
