import React, { useContext } from 'react';

import { AuthContext } from '../../store/authContext/authContext';
import { useStylesLayout } from '../../styles/styles';
import { Login } from '../Login/Login';

export const Layout: React.FC = ({ children }) => {
  const { state: authState } = useContext(AuthContext);
  const classes = useStylesLayout();

  if (!authState.auth.isAuth) {
    return <Login />;
  }
  return <div className={classes.root}>{children}</div>;
};
