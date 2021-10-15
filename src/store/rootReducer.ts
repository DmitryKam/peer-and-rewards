import { initialState } from './state';
import { ActionTypes, InitialStateType } from './types';

export const rootReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'ADD_REWARDS': {
      return {
        ...state,
        employees: [...action.payload.employee],
        rewardsData: [
          {
            from: action.payload.from,
            to: action.payload.to,
            why: action.payload.why,
            date: new Date(),
          },
          ...state.rewardsData,
        ],
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        errors: action.payload.error,
      };
    }
    case 'RESET_ERROR': {
      return {
        ...state,
        errors: null,
      };
    }
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
