import { authInitialState } from './state';
import { ActionsTypes, AuthActionType, AuthInitialStateType } from './types';

export const authReducer = (
  state: AuthInitialStateType = authInitialState,
  action: ActionsTypes,
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
          ...action.payload,
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
