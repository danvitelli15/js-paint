import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { canvasBaseState } from '../../model/canvas';
import { Pixel } from './pixel';

export const Canvas = () => {
  const height = 50;
  const width = 50;

  const baseColor = useRecoilValue(canvasBaseState);

  const baseLayer = useMemo(() => {
    const baseLayer = [];
    for (let x = 0; x < width; x++) {
      const column = [];
      for (let y = 0; y < height; y++) {
        column.push(<Pixel key={`canvas_base_${x}_${y}`} x={x} y={y} z={-1} />);
      }
      baseLayer.push(
        <Box
          key={`canvas_column_${x}`}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {column}
        </Box>
      );
    }
    return baseLayer;
  }, [baseColor]);

  const columns = [];

  for (let x = 0; x < width; x++) {
    const pixels = [];
    for (let y = 0; y < height; y++) {
      pixels.push(<Pixel key={`pixel_${x}_${y}`} x={x} y={y} z={0} />);
    }
    columns.push(
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>{pixels}</Box>
    );
  }

  return <Box sx={{ display: 'flex', flexDirection: 'row' }}>{columns}</Box>;
};
