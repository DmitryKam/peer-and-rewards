import React from 'react';

import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../store/store';
import { useStylesLayout } from '../../styles/styles';
import { Login } from '../Login/Login';

export const Layout: React.FC = ({ children }) => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);
  const classes = useStylesLayout();
  if (!isAuth) {
    return <Login />;
  }
  return <div className={classes.root}>{children}</div>;
};
