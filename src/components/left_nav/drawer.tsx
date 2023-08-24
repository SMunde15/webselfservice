import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider,  } from '@mui/material';
import ButtonList from './buttons';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function TemporaryDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        edge="start"
        sx={{  zIndex: 10, marginLeft: '1%' }}
      >
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
         className="variant-persistent anchor-left" // Apply the SCSS classes here
         variant="persistent"
         anchor="left"
         open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ButtonList/>
      </Drawer>
    </Box>
  );
}
