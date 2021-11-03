import { appInitialState } from './state';
import { AppActionType, AppActionTypes, AppInitialStateType } from './types';

export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: AppActionTypes,
): AppInitialStateType => {
  switch (action.type) {
    case AppActionType.ADD_REWARDS: {
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
    case AppActionType.SET_ERROR: {
      return {
        ...state,
        errors: action.payload.error,
      };
    }
    case AppActionType.RESET_ERROR: {
      return {
        ...state,
        errors: null,
      };
    }
    case AppActionType.ADD_EMPLOYEE: {
      return {
        ...state,
        employees: [
          ...state.employees,
          { name: action.payload.name, myReward: 250, give: 0, avatar: action.payload.avatar },
        ],
      };
    }
    case AppActionType.DELETE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.filter((employee) => employee.name !== action.payload.name),
      };
    }
  }
  return state;
};
