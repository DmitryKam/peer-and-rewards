import React, { useContext } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
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

  const logout = () => {
    successLogout();
    deleteEmployee();
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
          >
            <MenuIcon style={burgerMenuButtonColor} />
          </IconButton>
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
