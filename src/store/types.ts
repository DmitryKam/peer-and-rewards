import { addReward, resetError, setError } from './actions';

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

export type InitialStateType = {
  employee: Array<EmployeeType>;
  rewardsData: Array<RewardsDataType>;
  errors: string | null;
};

export type ContextType = {
  state: InitialStateType;
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  currentEmployee: EmployeeType;
  myRewards: Array<RewardsDataType>;
  autocompleteData: string[];
};

export type ActionTypes =
  | ReturnType<typeof addReward>
  | ReturnType<typeof setError>
  | ReturnType<typeof resetError>;
