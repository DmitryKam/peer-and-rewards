import React from 'react';

import { Paper } from '@mui/material';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { useFirebase } from '../../firebase/firebase';
import { useStyles } from './Login.styles';

export const Login: React.FC = () => {
  const classes = useStyles();
  const { signIn } = useFirebase();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.text}>
          Welcome to the Peer and Reward application. To continue using the application please
          login.
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton onClick={signIn}>Sign n with firebase</PrimaryButton>
        </div>
      </Paper>
    </div>
  );
};
