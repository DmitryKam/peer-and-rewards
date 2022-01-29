import { authInitialState } from './state';
import { AuthActionType, AuthActionTypes, AuthInitialStateType } from './types';

export const authReducer = (
  state: AuthInitialStateType = authInitialState,
  action: AuthActionTypes,
): AuthInitialStateType => {
  switch (action.type) {
    case AuthActionType.LOGIN: {
      return {
        ...state,
        auth: { isAuth: true, checkAuth: false },
      };
    }
    case AuthActionType.LOGOUT: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuth: false,
        },
      };
    }
    case AuthActionType.SET_USER: {
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
    case AuthActionType.DELETE_USER: {
      return {
        ...state,
        user: null,
      };
    }
    case AuthActionType.USER_AUTHENTICATED: {
      return {
        ...state,
        auth: {
          ...state.auth,
          checkAuth: false,
        },
      };
    }
  }
  return state;
};
