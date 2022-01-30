import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';

import { Button } from '../../common/button/Button';
import { useFirebase } from '../../firebase/firebase';
import { AppRootStateType } from '../../store/store';
import {
  appBarColor,
  burgerMenuButtonColor,
  headerBarFlexGrow,
  headerBarIconButton,
} from '../../styles/styles';
import { useStyles } from './HeaderBar.styles';

export const HeaderBar: React.FC = () => {
  const { signOut } = useFirebase();
  const classes = useStyles();
  const auth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutMenu = () => {
    signOut();
    handleClose();
  };

  return (
    <Box sx={headerBarFlexGrow}>
      <AppBar position="static" style={appBarColor}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={headerBarIconButton}
            onClick={handleClick}
          >
            <MenuIcon style={burgerMenuButtonColor} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {auth && <MenuItem onClick={handleClose}>Profile</MenuItem>}
            {auth && <MenuItem onClick={logoutMenu}>Sign Out</MenuItem>}
            {!auth && <MenuItem onClick={() => {}}>Empty</MenuItem>}
          </Menu>
          <div className={classes.appBarText}>Peer and Rewards</div>
          {auth ? <Button onClick={signOut}>Sign Out</Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
