import React, { useContext } from 'react';

import { AppContext } from '../../store/appContext';
import { useStylesLayout } from '../../styles/styles';
import { Login } from '../Login/Login';

export const Layout: React.FC = ({ children }) => {
  const { state } = useContext(AppContext);
  const classes = useStylesLayout();

  if (!state.auth.isAuth) {
    return <Login />;
  }
  return <div className={classes.root}>{children}</div>;
};
