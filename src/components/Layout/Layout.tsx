import React, { useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useFirebase } from '../../firebase/firebase';
import { AppRootStateType } from '../../store/store';
import { Login } from '../Login/Login';
import { useStyles } from './Layout.styles';

export const Layout: React.FC = ({ children }) => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const checkAuth = useSelector((state: AppRootStateType) => state.auth.auth.checkAuth);
  const classes = useStyles();
  const { isAuth: isUserSignedIn } = useFirebase();

  useEffect(() => {
    if (checkAuth) {
      isUserSignedIn();
    }
  }, [checkAuth, isUserSignedIn]);

  if (!checkAuth && !isAuth) {
    return <Login />;
  }

  if (checkAuth) {
    return <CircularProgress />;
  }

  return <div className={classes.root}>{children}</div>;
};
