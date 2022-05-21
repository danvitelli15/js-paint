import {
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { MouseEventHandler, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  canvasZoomDisplayValueSelector,
  canvasZoomSliderIncrementSelector,
  canvasZoomSliderValueSelector,
  zoomSliderMarks,
} from '../../../../model/surface';

export const ZoomMenu = () => {
  const displayedZoom = useRecoilValue(canvasZoomDisplayValueSelector);
  const incrementor = useSetRecoilState(canvasZoomSliderIncrementSelector);
  const [zoom, setZoom] = useRecoilState(canvasZoomSliderValueSelector);

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClose = useMemo(
    () => () => {
      setAnchorEl(null);
      setOpen(false);
    },
    []
  );

  const handleMenuIconClick = useMemo(
    (): MouseEventHandler<HTMLButtonElement> => (event) => {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      setOpen(true);
    },
    [setAnchorEl, setOpen]
  );

  const handleSliderButtonClick = useMemo(
    () => (shift: 1 | -1) => () => {
      incrementor(shift);
    },
    [incrementor]
  );

  const handleSliderChange = useMemo(
    () => (event: Event, value: number | number[]) => {
      if (!(value instanceof Array)) setZoom(value);
    },
    [setZoom]
  );

  return (
    <>
      <Tooltip title={'Canvas Zoom'}>
        <IconButton onClick={handleMenuIconClick}>
          <ZoomInIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="main-menu-bar-zoom-menu"
        onClose={handleMenuClose}
        open={open}
      >
        <MenuItem>
          <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={2}
            sx={{ width: '500px' }}
          >
            <IconButton onClick={handleSliderButtonClick(-1)}>
              <RemoveIcon />
            </IconButton>
            <Slider
              marks={zoomSliderMarks}
              max={8}
              onChange={handleSliderChange}
              step={null}
              value={zoom}
              valueLabelDisplay={'auto'}
            />
            <IconButton onClick={handleSliderButtonClick(1)}>
              <AddIcon />
            </IconButton>
            <Typography>{displayedZoom}</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
};
