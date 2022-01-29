import { AppActionType, AuthActionType, EmployeeType } from './types';

// app action
export const addReward = (employee: Array<EmployeeType>, from: string, to: string, why: string) =>
  ({
    type: AppActionType.ADD_REWARDS,
    payload: {
      employee,
      from,
      to,
      why,
    },
  } as const);

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

export const addEmployee = (name: string, avatar: string) =>
  ({
    type: AppActionType.ADD_EMPLOYEE,
    payload: {
      name,
      avatar,
    },
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

export const setUser = (name: string, email: string, imageUrl: string) =>
  ({
    type: AuthActionType.SET_USER,
    payload: { name, email, imageUrl },
  } as const);

export const deleteUser = () =>
  ({
    type: AuthActionType.DELETE_USER,
  } as const);
