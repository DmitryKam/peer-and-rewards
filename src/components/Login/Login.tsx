import React, { useCallback } from 'react';

import { Paper } from '@mui/material';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { logIn, setError, setUser } from '../../store/actions';
import { useStylesLogin } from '../../styles/styles';
import PrimaryButton from '../../ui/atoms/button/primapyButton';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStylesLogin();

  const successLogin = useCallback(
    (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if ('profileObj' in res) {
        dispatch(setUser(res.profileObj.name, res.profileObj.email, res.profileObj.imageUrl));
        dispatch(logIn());
      }
    },
    [dispatch],
  );

  const getError = useCallback(
    (error: string) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  const onFailLogin = (res: { details: string; error: string }) => {
    getError(res.details);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.text}>
          Welcome to the Peer and Reward application. To continue using the application please
          login.
        </div>
        <div className={classes.buttonContainer}>
          <GoogleLogin
            clientId={clientId as string}
            buttonText={'login'}
            onSuccess={successLogin}
            onFailure={onFailLogin}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            render={(renderProps) => {
              return <PrimaryButton onClick={renderProps.onClick}>Sign In</PrimaryButton>;
            }}
          />
        </div>
      </Paper>
    </div>
  );
};
