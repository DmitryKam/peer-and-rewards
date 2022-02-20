import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { db } from '../firebase/firebase';
import { getUserRewards } from '../utils/getUserRewards';
import { getRewards, setUser } from './actions';
import { AppRootStateType } from './store';
import { ActionsTypes, RewardsDataType } from './types';

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsTypes>;

export const fetchRewards =
  (): ThunkType => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>) => {
    try {
      const q = query(collection(db, 'rewards'), orderBy('createdAt', 'desc'));
      await onSnapshot(q, (snapshot) => {
        const rewards = snapshot.docs.map((reward) => {
          return { ...reward.data(), id: reward.id } as RewardsDataType;
        });
        dispatch(getRewards(rewards));
      });
    } catch (err) {
      console.info(err);
    }
  };

export const setReward =
  (to: string, amount: number, why: string, handleClose: () => void) =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>,
    getState: () => AppRootStateType,
  ) => {
    try {
      const name = getState().auth.user?.name;
      const date = new Date().toString();
      await addDoc(collection(db, 'rewards'), {
        to,
        amount,
        why,
        from: name,
        date,
        createdAt: serverTimestamp(),
      });
      const q = query(collection(db, 'rewards'), orderBy('createdAt'));
      await onSnapshot(q, (snapshot) => {
        snapshot.docs.map((reward) => {
          return { ...reward.data(), id: reward.id } as RewardsDataType;
        });
      });
      handleClose();
    } catch (e) {
      console.info(e);
    }
  };

export const updateAmount =
  () =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>,
    getState: () => AppRootStateType,
  ) => {
    const user = getState().auth.user;
    const rewards = getState().app.rewardsData;
    if (user && rewards.length) {
      const { id, name: userName, imageUrl, email } = user;
      const { give, myReward } = getUserRewards(rewards, userName);
      dispatch(setUser(userName, email, imageUrl, id, give, myReward));
      dispatch(getRewards(rewards));
    }
  };
