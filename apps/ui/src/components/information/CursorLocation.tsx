import { Chip } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

export const CursorLocation = () => {
  const text = `${window.innerWidth} x ${window.innerHeight}`;
  return (
    <Chip
      variant="filled"
      color="info"
      icon={<EditLocationAltIcon />}
      label={text}
      sx={{ marginRight: 1 }}
    />
  );
};
