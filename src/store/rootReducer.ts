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
        employee: [...action.payload.employee],
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
  }

  return state;
};
