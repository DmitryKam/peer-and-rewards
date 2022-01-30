import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { db } from '../firebase/firebase';
import { getRewards, setUser } from './actions';
import { AppRootStateType } from './store';
import { ActionsTypes, RewardsDataType } from './types';

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsTypes>;

export const fetchRewards =
  (): ThunkType => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>) => {
    try {
      const { docs } = await getDocs(collection(db, 'rewards'));
      const rewards = docs.map((reward) => {
        return { ...reward.data(), id: reward.id } as RewardsDataType;
      });
      dispatch(getRewards(rewards));
    } catch (err) {
      console.info(err);
    }
  };

export const updateRewards =
  (): ThunkType =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsTypes>,
    getState: () => AppRootStateType,
  ) => {
    const user = getState().auth.user;
    if (user) {
      const { id, name, imageUrl, email } = user;
      const userSnap = await getDoc(doc(db, 'user', id));
      if (userSnap.exists()) {
        const { give, myRewards } = userSnap.data();
        dispatch(setUser(name, email, imageUrl, id, give, myRewards));
      }
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
      const id = getState().auth.user?.id;
      const updatedAmount = getState().auth.user?.give || 0;
      const date = new Date().toString();
      await addDoc(collection(db, 'rewards'), {
        to,
        amount,
        why,
        from: name,
        date,
      });
      const userDoc = doc(db, 'user', id as string);
      await updateDoc(userDoc, { give: updatedAmount + amount });
      dispatch(fetchRewards());
      dispatch(updateRewards());
      handleClose();
    } catch (e) {
      console.info(e);
    }
  };
