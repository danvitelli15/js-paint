import { Chip } from '@mui/material';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { useSurfaceDimensions } from '../../model/surface';

export const WindowDimensionChip = () => {
  const surfaceDimentions = useSurfaceDimensions();

  return (
    <Chip
      color="info"
      icon={<AspectRatioIcon />}
      label={`${surfaceDimentions.width} x ${surfaceDimentions.height}`}
      sx={{ marginRight: 1 }}
      variant="filled"
    />
  );
};
