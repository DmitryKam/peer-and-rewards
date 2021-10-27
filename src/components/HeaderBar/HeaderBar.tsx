import React, { useContext } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { GoogleLogout } from 'react-google-login';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { AppContext } from '../../store/appContext/appContext';
import { AuthContext } from '../../store/authContext/authContext';
import {
  appBarColor,
  burgerMenuButtonColor,
  headerBarFlexGrow,
  headerBarIconButton,
  useStylesHeaderBar,
} from '../../styles/styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

export const HeaderBar: React.FC = () => {
  const classes = useStylesHeaderBar();
  const { state, successLogout } = useContext(AuthContext);
  const { deleteEmployee } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    successLogout();
    deleteEmployee();
  };

  const logoutMenu = () => {
    logout();
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={logoutMenu}>Logout</MenuItem>
          </Menu>
          <div className={classes.appBarText}>Peer and Rewards</div>
          {state.auth.isAuth ? (
            <GoogleLogout
              onLogoutSuccess={logout}
              render={(renderProps) => {
                return <PrimaryButton onClick={renderProps.onClick}>Logout</PrimaryButton>;
              }}
              clientId={clientId}
            />
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
