import { appInitialState } from './state';
import { ActionsTypes, AppActionType, AppInitialStateType } from './types';

export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: ActionsTypes,
): AppInitialStateType => {
  switch (action.type) {
    case AppActionType.GET_REWARDS: {
      return {
        ...state,
        rewardsData: action.payload.rewards,
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
  }
  return state;
};
