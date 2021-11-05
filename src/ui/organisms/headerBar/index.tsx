import React from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { Locales } from '../../../locales';
import { deleteCurrentEmployee, logOut } from '../../../store/actions';
import { AppRootStateType } from '../../../store/store';
import PrimaryButton from '../../atoms/button/primapyButton';
import BurgerMenuIcon from '../../atoms/icon/burgerMenuIcon';
import HeaderText from '../../atoms/texts/headerText';
import AppMenu from '../../molecules/appMenu';
import { appBarColor, headerBarFlexGrow } from './styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const HeaderBar: React.FC = () => {
  const auth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const currentName = useSelector((state: AppRootStateType) => state.auth.user?.name);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

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
          <BurgerMenuIcon handleClick={handleClick} />
          <AppMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            logoutMenu={logoutMenu}
            auth={auth}
          />
          <HeaderText text={Locales.PEER_AND_REWARDS} />
          {auth ? (
            <GoogleLogout
              onLogoutSuccess={onLogout}
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

export default HeaderBar;
