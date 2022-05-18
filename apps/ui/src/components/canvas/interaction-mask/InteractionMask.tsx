import { canvasShapeState } from '../../../model/canvas';
import { useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Box } from '@mui/material';
import { Pixel } from '../pixel';
import { canvasLayerZIndexRange } from '../../../constants/z-indexes';
import { cursorLocationState } from '../../../model/surface';

export const InteractionMask = () => {
  const { height, width } = useRecoilValue(canvasShapeState);
  const setCursorLocaiton = useSetRecoilState(cursorLocationState);

  const baseLayer = useMemo(() => {
    const baseLayer = [];
    for (let x = 0; x < width; x++) {
      const column = [];
      for (let y = 0; y < height; y++) {
        column.push(
          <Pixel
            color={'#ffffff'}
            key={`interaction_mask_${x}_${y}`}
            opacity={0}
            onClick={() => console.log(`[${x}, ${y}]`)}
            onPointerEnter={() => setCursorLocaiton({ x, y })}
          />
        );
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
  }, [height, width, setCursorLocaiton]);

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex: canvasLayerZIndexRange.max,
      }}
      onPointerLeave={() => setCursorLocaiton({ x: -1, y: -1 })}
    >
      {baseLayer}
    </Box>
  );
};
