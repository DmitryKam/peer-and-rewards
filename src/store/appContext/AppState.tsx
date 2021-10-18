import React, { useCallback, useContext, useReducer, useRef } from 'react';

import { ErrorSnackBar } from '../../components/ErrorSnackBar/ErrorSnackBar';
import { addEmployee, addReward, deleteCurrentEmployee, resetError, setError } from '../actions';
import { appReducer } from '../appReducer';
import { AuthContext } from '../authContext/authContext';
import { appInitialState } from '../state';
import { EmployeeType } from '../types';
import { AppContext } from './appContext';

export const AppState: React.FC = ({ children }) => {
  const { state: authState } = useContext(AuthContext);
  const [state, dispatch] = useReducer(appReducer, appInitialState);
  const currentName = useRef<string>('');
  console.log(currentName);
  if (!currentName.current && authState.user?.name) {
    currentName.current = authState.user.name;
  }

  //const currentEmployee = state.employees.find((employee) => employee.name === currentName.current);
  const myRewards = state.rewardsData.filter(
    (rewardItem) => rewardItem.from === currentName.current,
  );
  const autocompleteData: Array<string> = [];
  state.employees.map((e) => {
    if (e.name === currentName.current) {
      return;
    }
    return autocompleteData.push(e.name);
  });

  const addRewardToEmployee = useCallback(
    (to: string, amount: number, why: string): void => {
      dispatch(resetError());
      const fromEmployee = state.employees.find((e) => e.name === currentName.current);
      const toEmployee = state.employees.find((e) => e.name === to);
      const newEmployeeState: Array<EmployeeType> = [];
      state.employees.filter((el) => {
        if (el.name === currentName.current) {
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
        return dispatch(addReward(EmployeeArray, currentName.current, to, why));
      }
    },
    [state.employees, dispatch],
  );

  const closeError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetError());
  };

  const getError = (error: string) => {
    dispatch(setError(error));
  };

  const setEmployee = useCallback(() => {
    if (authState.user) {
      dispatch(addEmployee(authState.user.name, authState.user.imageUrl));
    }
  }, [dispatch, authState]);

  const deleteEmployee = useCallback(() => {
    dispatch(deleteCurrentEmployee(currentName.current));
    currentName.current = '';
  }, [dispatch, currentName]);

  return (
    <AppContext.Provider
      value={{
        state,
        addRewardToEmployee,
        setEmployee,
        deleteEmployee,
        myRewards,
        autocompleteData,
        getError,
      }}
    >
      {children}
      <ErrorSnackBar handleClose={closeError} />
    </AppContext.Provider>
  );
};
