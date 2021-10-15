import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { addReward, deleteUser, logIn, logOut, resetError, setError, setUser } from './actions';

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

export type InitialStateType = {
  auth: AuthType;
  employees: Array<EmployeeType>;
  rewardsData: Array<RewardsDataType>;
  errors: string | null;
  user: UserType | null;
};

export type ContextType = {
  state: InitialStateType;
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  currentEmployee: EmployeeType;
  myRewards: Array<RewardsDataType>;
  autocompleteData: string[];
  successLogin: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailLogin: (res: { details: string; error: string }) => void;
  successLogout: () => void;
};

export type ActionTypes =
  | ReturnType<typeof addReward>
  | ReturnType<typeof setError>
  | ReturnType<typeof resetError>
  | ReturnType<typeof logIn>
  | ReturnType<typeof logOut>
  | ReturnType<typeof setUser>
  | ReturnType<typeof deleteUser>;
