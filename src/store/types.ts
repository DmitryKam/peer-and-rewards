import {
  addEmployee,
  addReward,
  deleteCurrentEmployee,
  deleteUser,
  logIn,
  logOut,
  resetError,
  setError,
  setUser,
} from './actions';

export type EmployeeType = {
  name: string;
  myReward: number;
  give: number;
  avatar: string;
};

export type RewardsDataType = {
  from: string;
  to: string;
  why: string;
  date: Date;
};

type AuthType = {
  isAuth: boolean;
};

type UserType = {
  name: string;
  email: string;
  imageUrl: string;
  myRewards: number;
  give: number;
};

export type AppInitialStateType = {
  employees: Array<EmployeeType>;
  rewardsData: Array<RewardsDataType>;
  errors: string | null;
};

export type AuthInitialStateType = {
  auth: AuthType;
  user: UserType | null;
};

export type AppActionTypes =
  | ReturnType<typeof addReward>
  | ReturnType<typeof setError>
  | ReturnType<typeof resetError>
  | ReturnType<typeof addEmployee>
  | ReturnType<typeof deleteCurrentEmployee>;

export type AuthActionTypes =
  | ReturnType<typeof logIn>
  | ReturnType<typeof logOut>
  | ReturnType<typeof setUser>
  | ReturnType<typeof deleteUser>;
