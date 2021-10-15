import React, { useCallback, useReducer } from 'react';

import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { ErrorSnackBar } from '../components/ErrorSnackBar/ErrorSnackBar';
import { addReward, logIn, logOut, resetError, setError, setUser } from './actions';
import { AppContext } from './appContext';
import { rootReducer } from './rootReducer';
import { initialState } from './state';
import { EmployeeType } from './types';

export const AppState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const currentName = 'James William';
  const currentEmployee = state.employees.find((employee) => employee.name === currentName);
  const myRewards = state.rewardsData.filter((rewardItem) => rewardItem.from === currentName);
  const autocompleteData: Array<string> = [];
  state.employees.map((e) => {
    if (e.name === currentName) {
      return;
    }
    return autocompleteData.push(e.name);
  });

  const addRewardToEmployee = useCallback(
    (to: string, amount: number, why: string): void => {
      dispatch(resetError());
      const fromEmployee = state.employees.find((e) => e.name === currentName);
      const toEmployee = state.employees.find((e) => e.name === to);
      const newEmployeeState: Array<EmployeeType> = [];
      state.employees.filter((el) => {
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
    },
    [state.employees, dispatch],
  );

  const closeError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetError());
  };

  const successLogin = useCallback(
    (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log('user', res);
      if ('profileObj' in res) {
        dispatch(setUser(res.profileObj.name, res.profileObj.email, res.profileObj.imageUrl));
      }
      dispatch(logIn());
    },
    [dispatch],
  );

  const successLogout = () => {
    dispatch(logOut());
  };

  const onFailLogin = (res: { details: string; error: string }) => {
    dispatch(setError(res.details));
  };

  if (!currentEmployee) {
    return <div>Something went wrong</div>;
  }
  console.log('appState');
  return (
    <AppContext.Provider
      value={{
        state,
        addRewardToEmployee,
        currentEmployee,
        myRewards,
        autocompleteData,
        successLogin,
        onFailLogin,
        successLogout,
      }}
    >
      {children}
      <ErrorSnackBar handleClose={closeError} />
    </AppContext.Provider>
  );
};
