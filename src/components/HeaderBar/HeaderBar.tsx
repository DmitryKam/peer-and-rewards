import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common/button/Button';
import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { deleteCurrentEmployee, logOut } from '../../store/actions';
import { AppRootStateType } from '../../store/store';
import {
  appBarColor,
  burgerMenuButtonColor,
  headerBarFlexGrow,
  headerBarIconButton,
} from '../../styles/styles';
import { useStyles } from './HeaderBar.styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

export const HeaderBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const currentName = useSelector((state: AppRootStateType) => state.auth.user?.name);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(logOut());
    dispatch(deleteCurrentEmployee(currentName as string));
  };

  const logoutMenu = () => {
    onLogout();
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
            {auth && <MenuItem onClick={logoutMenu}>Logout</MenuItem>}
            {!auth && <MenuItem onClick={() => {}}>Empty</MenuItem>}
          </Menu>
          <div className={classes.appBarText}>Peer and Rewards</div>
          {auth ? (
            <GoogleLogout
              onLogoutSuccess={onLogout}
              render={(renderProps) => {
                // return <PrimaryButton onClick={renderProps.onClick}>Logout</PrimaryButton>;
                return <Button onClick={renderProps.onClick}>Logout</Button>;
              }}
              clientId={clientId}
            />
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
