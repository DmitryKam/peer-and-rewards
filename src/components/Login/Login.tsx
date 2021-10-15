import React, { useContext } from 'react';

import { Paper } from '@mui/material';
import GoogleLogin from 'react-google-login';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { AppContext } from '../../store/appContext';
import { useStylesLogin } from '../../styles/styles';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const Login: React.FC = () => {
  const { successLogin, onFailLogin } = useContext(AppContext);
  const classes = useStylesLogin();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.text}>
          Welcome to the Peer and Reward application. To continue using the application please
          login.
        </div>
        <div style={{ alignSelf: 'center' }}>
          <GoogleLogin
            clientId={clientId as string}
            buttonText={'login'}
            onSuccess={successLogin}
            onFailure={onFailLogin}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: 20 }}
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
