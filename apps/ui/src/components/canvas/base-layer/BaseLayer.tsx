import { Box } from '@mui/material';
import { canvasBaseState } from '../../../model/canvas';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

export const BaseLayer = () => {
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
};
