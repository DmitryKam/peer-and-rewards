import React from 'react';

import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../store/store';
import { Login } from '../Login/Login';
import { useStyles } from './Layout.styles';

export const Layout: React.FC = ({ children }) => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const classes = useStyles();

  if (!isAuth) {
    return <Login />;
  }

  return <div className={classes.root}>{children}</div>;
};
