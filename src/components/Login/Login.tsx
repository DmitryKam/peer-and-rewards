import React, { useContext } from 'react';

import { Paper } from '@mui/material';
import GoogleLogin from 'react-google-login';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { AppContext } from '../../store/appContext/appContext';
import { AuthContext } from '../../store/authContext/authContext';
import { useStylesLogin } from '../../styles/styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const Login: React.FC = () => {
  const { successLogin } = useContext(AuthContext);
  const { getError } = useContext(AppContext);
  const classes = useStylesLogin();

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
