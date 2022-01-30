import React, { useEffect } from 'react';

import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useFirebase } from '../../firebase/firebase';
import { AppRootStateType } from '../../store/store';
import { Login } from '../Login/Login';
import { useStyles } from './Layout.styles';

export const Layout: React.FC = ({ children }) => {
  const { isAuth: isUserSignedIn } = useFirebase();
  const isAuth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const checkAuth = useSelector((state: AppRootStateType) => state.auth.auth.checkAuth);
  const classes = useStyles();

  useEffect(() => {
    if (checkAuth) {
      isUserSignedIn();
    }
  }, [checkAuth, isUserSignedIn]);

  if (!checkAuth && !isAuth) {
    return <Login />;
  }

  if (checkAuth) {
    return <LinearProgress />;
  }

  return <div className={classes.root}>{children}</div>;
};
