import { AppActionType, AuthActionType, RewardsDataType } from './types';

// app action

export const setError = (error: string) =>
  ({
    type: AppActionType.SET_ERROR,
    payload: {
      error,
    },
  } as const);

export const resetError = () =>
  ({
    type: AppActionType.RESET_ERROR,
  } as const);

export const deleteCurrentEmployee = (name: string) =>
  ({
    type: AppActionType.DELETE_EMPLOYEE,
    payload: {
      name,
    },
  } as const);

// auth action
export const logIn = () =>
  ({
    type: AuthActionType.LOGIN,
  } as const);

export const logOut = () =>
  ({
    type: AuthActionType.LOGOUT,
  } as const);

export const userAuthenticated = () =>
  ({
    type: AuthActionType.USER_AUTHENTICATED,
  } as const);

export const setUser = (
  name: string,
  email: string,
  imageUrl: string,
  id: string,
  give: number,
  myRewards: number,
) =>
  ({
    type: AuthActionType.SET_USER,
    payload: { name, email, imageUrl, id, give, myRewards },
  } as const);

export const deleteUser = () =>
  ({
    type: AuthActionType.DELETE_USER,
  } as const);

export const getRewards = (rewards: RewardsDataType[]) =>
  ({
    type: AppActionType.GET_REWARDS,
    payload: { rewards },
  } as const);

export const updateUser = (give: number, myRewards: number) =>
  ({ type: AuthActionType.UPDATE_USER, payload: { give, myRewards } } as const);
