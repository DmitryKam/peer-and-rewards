import React from 'react';

import { Paper, Typography } from '@mui/material';

import { Button } from '../../common/button/Button';
import { useFirebase } from '../../firebase/firebase';
import { useStyles } from './Login.styles';

export const Login = () => {
  const classes = useStyles();
  const { signIn } = useFirebase();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant={'h5'} className={classes.text}>
          Welcome to the Peer and Reward application. To continue using the application please
          login.
        </Typography>
        <Button onClick={signIn} className={classes.buttonContainer}>
          Sign In
        </Button>
      </Paper>
    </div>
  );
};
