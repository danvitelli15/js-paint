import { Chip } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { useRecoilValue } from 'recoil';
import { cursorLocationState } from '../../model/surface';

export const CursorLocationChip = () => {
  const cursorLocation = useRecoilValue(cursorLocationState);

  return (
    <Chip
      variant="filled"
      color="info"
      icon={<EditLocationAltIcon />}
      label={`[${cursorLocation.x + 1}, ${cursorLocation.y + 1}]`}
      sx={{ marginRight: 1 }}
    />
  );
};
