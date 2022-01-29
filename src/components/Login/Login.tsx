import React, { useCallback } from 'react';

import { Paper } from '@mui/material';
import { useDispatch } from 'react-redux';

import { PrimaryButton } from '../../common/Buttons/PrimaryButton';
import { firebase } from '../../firebase/firebase';
import { logIn, setError, setUser } from '../../store/actions';
import { useStyles } from './Login.styles';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(googleProvider);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, photoURL } = user;

          if (displayName && email && photoURL) {
            dispatch(setUser(displayName, email, photoURL));
            dispatch(logIn());
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getError = useCallback(
    (error: string) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

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
