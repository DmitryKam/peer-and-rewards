import { useCallback } from 'react';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
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
import { RewardsDataType } from '../store/types';
import { getUserRewards } from '../utils/getUserRewards';

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
export const db = getFirestore(app);
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
      const { displayName, email, photoURL, uid } = result.user;
      const userSnap = await getDoc(doc(db, 'user', uid));
      if (userSnap.exists()) {
        const { give, myRewards } = userSnap.data();
        dispatch(setUser(displayName || '', email || '', photoURL || '', uid, give, myRewards));
      } else {
        await setDoc(doc(db, 'user', uid), { give: 0, myRewards: 0 });
        dispatch(setUser(displayName || '', email || '', photoURL || '', uid, 0, 0));
      }
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
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { displayName, email, photoURL, uid } = user;
          const { docs } = await getDocs(collection(db, 'rewards'));
          const rewards = docs.map((reward) => {
            return { ...reward.data(), id: reward.id } as RewardsDataType;
          });
          const { give, myReward } = getUserRewards(rewards, displayName);

          await setDoc(doc(db, 'user', uid), { displayName, email, photoURL });
          dispatch(setUser(displayName || '', email || '', photoURL || '', uid, give, myReward));
        }
        dispatch(logIn());

        dispatch(userAuthenticated());
      });
    } catch (e) {
      dispatch(userAuthenticated());
      console.info('no user');
    }
  };

  const fromUserIcon = async (fromUser: string) => {
    const q = query(collection(db, 'user'), where('displayName', '==', fromUser));
    const querySnapshot = await getDocs(q);
    let imageUrl = '';
    querySnapshot.forEach((fromUserData) => {
      if (imageUrl) {
        return;
      }
      imageUrl = fromUserData.data().photoURL || '';
    });
    return imageUrl;
  };

  return {
    signIn,
    signOut,
    isAuth,
    fromUserIcon,
  };
};
