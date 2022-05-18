import { Chip } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { useRecoilValue } from 'recoil';
import { cursorLocationState } from '../../model/surface';

export const CursorLocation = () => {
  const cursorLocation = useRecoilValue(cursorLocationState);

  return (
    <Chip
      variant="filled"
      color="info"
      icon={<EditLocationAltIcon />}
      label={`[${cursorLocation.x}, ${cursorLocation.y}]`}
      sx={{ marginRight: 1 }}
    />
  );
};
