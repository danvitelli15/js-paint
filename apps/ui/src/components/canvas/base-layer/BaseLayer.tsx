import { Box } from '@mui/material';
import { canvasShapeState } from '../../../model/canvas';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { BaseLayerPixel } from './BaseLayerPixel';
import { canvasLayerZIndexRange } from '../../../constants/z-indexes';

export const BaseLayer = () => {
  const { height, width } = useRecoilValue(canvasShapeState);

  const baseLayer = useMemo(() => {
    const baseLayer = [];
    for (let x = 0; x < width; x++) {
      const column = [];
      for (let y = 0; y < height; y++) {
        column.push(<BaseLayerPixel key={`canvas_base_${x}_${y}`} />);
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
  }, [height, width]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        zIndex: canvasLayerZIndexRange.min,
      }}
    >
      {baseLayer}
    </Box>
  );
};
