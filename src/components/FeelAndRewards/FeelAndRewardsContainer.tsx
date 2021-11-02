import React, { SyntheticEvent, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addReward, resetError, setError } from '../../store/actions';
import { AppRootStateType } from '../../store/store';
import { EmployeeType } from '../../store/types';
import { FeelAndRewards } from './FeelAndRewards';

export const FeelAndRewardsContainer = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const userName = useSelector((state: AppRootStateType) => state.auth.user?.name);
  const state = useSelector((st: AppRootStateType) => st.app);
  const currentEmployee = state.employees.find((employee) => employee.name === userName);
  const myRewards = state.rewardsData.filter((rewardItem) => rewardItem.from === userName);

  const autocompleteData: Array<string> = [];

  state.employees.map((e) => {
    if (e.name === userName) {
      return;
    }
    return autocompleteData.push(e.name);
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const addRewardToEmployee = useCallback(
    (to: string, amount: number, why: string) => {
      dispatch(resetError());
      const fromEmployee = state.employees.find((e) => e.name === userName);
      const toEmployee = state.employees.find((e) => e.name === to);
      const newEmployeeState: Array<EmployeeType> = [];
      state.employees.filter((el) => {
        if (el.name === userName) {
          return;
        }
        if (el.name === to) {
          return;
        }
        newEmployeeState.push(el);
      });

      if (fromEmployee && toEmployee && newEmployeeState && userName) {
        if (fromEmployee.myReward < amount) {
          return dispatch(setError('You have exceeded your balance'));
        }
        fromEmployee.myReward = fromEmployee.myReward - amount;
        fromEmployee.give = fromEmployee.give + amount;
        toEmployee.myReward = toEmployee.myReward + amount;

        const EmployeeArray = [...newEmployeeState, fromEmployee, toEmployee];
        return dispatch(addReward(EmployeeArray, userName, to, why));
      }
    },
    [dispatch, state.employees, userName],
  );

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!currentEmployee) {
    return <div>Something went wrong!</div>;
  }

  return (
    <FeelAndRewards
      value={value}
      open={open}
      myRewards={myRewards}
      addRewardToEmployee={addRewardToEmployee}
      autocompleteData={autocompleteData}
      handleClose={handleClose}
      state={state}
      currentEmployee={currentEmployee}
      handleChange={handleChange}
      handleOpen={handleOpen}
    />
  );
};
