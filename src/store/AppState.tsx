import React, { useReducer } from 'react';

import { ErrorSnackBar } from '../components/ErrorSnackBar/ErrorSnackBar';
import { addReward, resetError, setError } from './actions';
import { AppContext } from './appContext';
import { rootReducer } from './rootReducer';
import { initialState } from './state';
import { EmployeeType } from './types';

export const AppState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const currentName = 'James William';
  const currentEmployee = state.employee.find((employee) => employee.name === currentName);
  const myRewards = state.rewardsData.filter((rewardItem) => rewardItem.from === currentName);
  const autocompleteData: Array<string> = [];
  state.employee.map((e) => {
    if (e.name === currentName) {
      return;
    }
    return autocompleteData.push(e.name);
  });

  const addRewardToEmployee = (to: string, amount: number, why: string): void => {
    dispatch(resetError());
    const fromEmployee = state.employee.find((e) => e.name === currentName);
    const toEmployee = state.employee.find((e) => e.name === to);
    const newEmployeeState: Array<EmployeeType> = [];
    state.employee.filter((el) => {
      if (el.name === currentName) {
        return;
      }
      if (el.name === to) {
        return;
      }
      newEmployeeState.push(el);
    });

    if (fromEmployee && toEmployee && newEmployeeState) {
      if (fromEmployee.myReward < amount) {
        return dispatch(setError('You have exceeded your balance'));
      }
      fromEmployee.myReward = fromEmployee.myReward - amount;
      fromEmployee.give = fromEmployee.give + amount;
      toEmployee.myReward = toEmployee.myReward + amount;

      const EmployeeArray = [...newEmployeeState, fromEmployee, toEmployee];
      return dispatch(addReward(EmployeeArray, currentName, to, why));
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetError());
  };

  if (!currentEmployee) {
    return <div>Something went wrong</div>;
  }

  return (
    <AppContext.Provider
      value={{ state, addRewardToEmployee, currentEmployee, myRewards, autocompleteData }}
    >
      {children}
      <ErrorSnackBar handleClose={handleClose} />
    </AppContext.Provider>
  );
};
