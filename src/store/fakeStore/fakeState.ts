import { AppInitialStateType, AuthInitialStateType } from '../types';

export type RootFakeStateType = {
  auth: AuthInitialStateType;
  app: AppInitialStateType;
};

export const appFakeState: AppInitialStateType = {
  rewardsData: [],
  errors: null,
};
export const authFakeState: AuthInitialStateType = {
  auth: {
    isAuth: false,
    checkAuth: true,
  },
  user: {
    name: 'Fake User',
    give: 0,
    imageUrl:
      'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
    email: 'email@gmail.com',
    myRewards: 250,
    id: '123',
  },
};
export const rootFakeState: RootFakeStateType = {
  auth: authFakeState,
  app: appFakeState,
};
