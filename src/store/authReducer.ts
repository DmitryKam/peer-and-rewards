import { authInitialState } from './state';
import { AuthActionTypes, AuthInitialStateType } from './types';

export const authReducer = (
  state: AuthInitialStateType = authInitialState,
  action: AuthActionTypes,
): AuthInitialStateType => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        auth: { isAuth: true },
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        auth: {
          isAuth: false,
        },
      };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: {
          email: action.payload.email,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          myRewards: 250,
          give: 0,
        },
      };
    }
    case 'DELETE_USER': {
      return {
        ...state,
        user: null,
      };
    }
  }
  return state;
};
