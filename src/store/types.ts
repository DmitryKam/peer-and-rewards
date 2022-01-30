import {
  deleteCurrentEmployee,
  deleteUser,
  getRewards,
  logIn,
  logOut,
  resetError,
  setError,
  setUser,
  updateUser,
  userAuthenticated,
} from './actions';

export enum AppActionType {
  ADD_REWARDS = 'ADD_REWARDS',
  SET_ERROR = 'SET_ERROR',
  RESET_ERROR = 'RESET_ERROR',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  GET_REWARDS = 'GET_REWARDS',
}

export enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_USER = 'SET_USER',
  DELETE_USER = 'DELETE_USER',
  UPDATE_USER = 'UPDATE_USER',
  USER_AUTHENTICATED = 'USER_AUTHENTICATED',
}

export type RewardsDataType = {
  from: string;
  to: string;
  why: string;
  date: string;
  id: string;
  amount: number;
};

type AuthType = {
  isAuth: boolean;
  checkAuth: boolean;
};

export type UserType = {
  name: string;
  email: string;
  imageUrl: string;
  myRewards: number;
  give: number;
  id: string;
};

export type AppInitialStateType = {
  rewardsData: Array<RewardsDataType>;
  errors: string | null;
};

export type AuthInitialStateType = {
  auth: AuthType;
  user: UserType | null;
};

export type ActionsTypes =
  | ReturnType<typeof logIn>
  | ReturnType<typeof logOut>
  | ReturnType<typeof setUser>
  | ReturnType<typeof deleteUser>
  | ReturnType<typeof userAuthenticated>
  | ReturnType<typeof setError>
  | ReturnType<typeof resetError>
  | ReturnType<typeof deleteCurrentEmployee>
  | ReturnType<typeof getRewards>
  | ReturnType<typeof updateUser>;
