import { Chip } from '@mui/material';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

export const WindowDimensionChip = () => {
  const text = `${window.innerWidth} x ${window.innerHeight}`;
  return (
    <Chip
      color="info"
      icon={<AspectRatioIcon />}
      label={text}
      sx={{ marginRight: 1 }}
      variant="filled"
    />
  );
};
