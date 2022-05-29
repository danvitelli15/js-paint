import LayersIcon from '@mui/icons-material/Layers';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { layersInfoSelector } from 'apps/ui/src/model/canvas';
import { activeLayerSelector } from 'apps/ui/src/model/canvas/layer/active-layer.state';
import { MouseEventHandler, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export const LayerMenu = () => {
  const layers = useRecoilValue(layersInfoSelector);
  const [activeLayer, setActiveLayer] = useRecoilState(activeLayerSelector);

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

  return (
    <>
      <IconButton onClick={handleMenuIconClick}>
        <LayersIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="main-menu-bar-layer-menu"
        onClose={handleMenuClose}
        open={open}
      >
        {layers.map((layer) => (
          <MenuItem>{layer.name}</MenuItem>
        ))}
      </Menu>
    </>
  );
};
