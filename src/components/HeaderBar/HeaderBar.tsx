import React, { useContext } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { GoogleLogout } from 'react-google-login';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { AppContext } from '../../store/appContext';
import { appBarColor, useStylesHeaderBar } from '../../styles/styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

export const HeaderBar: React.FC = () => {
  const classes = useStylesHeaderBar();
  const { state, successLogout } = useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarColor}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon style={{ color: '#000a34' }} />
          </IconButton>
          <div className={classes.appBarText}>Peer and Rewards</div>
          {state.auth.isAuth ? (
            <GoogleLogout
              onLogoutSuccess={successLogout}
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
