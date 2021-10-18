import React, { useCallback, useReducer } from 'react';

import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { logIn, logOut, setUser } from '../actions';
import { authReducer } from '../authReducer';
import { authInitialStateType } from '../state';
import { AuthContext } from './authContext';

export const AuthState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialStateType);

  const successLogin = useCallback(
    (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log('user', res);
      if ('profileObj' in res) {
        dispatch(setUser(res.profileObj.name, res.profileObj.email, res.profileObj.imageUrl));
        dispatch(logIn());
      }
    },
    [dispatch],
  );

  const successLogout = () => {
    dispatch(logOut());
  };

  return (
    <AuthContext.Provider value={{ state, successLogin, successLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
