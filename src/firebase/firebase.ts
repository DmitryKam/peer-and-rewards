import { useCallback } from 'react';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteCurrentEmployee,
  logIn,
  logOut,
  setError,
  setUser,
  userAuthenticated,
} from '../store/actions';
import { AppRootStateType } from '../store/store';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const useFirebase = () => {
  const dispatch = useDispatch();
  const currentName = useSelector((state: AppRootStateType) => state.auth.user?.name);

  const getError = useCallback(
    (error: string) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = result.user;
      dispatch(setUser(displayName || '', email || '', photoURL || ''));
      dispatch(logIn());
      dispatch(userAuthenticated());
    } catch (err) {
      dispatch(userAuthenticated());
      getError('Login flied');
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      dispatch(logOut());
      dispatch(deleteCurrentEmployee(currentName as string));
      console.info('logged out');
    } catch (e) {
      getError('Login flied');
    }
  };

  const isAuth = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, email, photoURL } = user;
          dispatch(setUser(displayName || '', email || '', photoURL || ''));
          dispatch(logIn());
        }
        dispatch(userAuthenticated());
      });
    } catch (e) {
      dispatch(userAuthenticated());
      console.info('no user');
    }
  };

  return {
    signIn,
    signOut,
    isAuth,
  };
};
