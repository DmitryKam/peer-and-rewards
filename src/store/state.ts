import { AppInitialStateType, AuthInitialStateType } from './types';

export const appInitialState: AppInitialStateType = {
  rewardsData: [],
  errors: null,
};

export const authInitialState: AuthInitialStateType = {
  auth: {
    isAuth: false,
    checkAuth: true,
  },
  user: null,
};
