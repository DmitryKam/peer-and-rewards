import React, { SyntheticEvent, useContext, useState } from 'react';

import { AppContext } from '../../store/appContext';
import { FeelAndRewards } from './FeelAndRewards';

export const FeelAndRewardsContainer = () => {
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const { state, addRewardToEmployee, myRewards, autocompleteData, currentEmployee } =
    useContext(AppContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

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
      handleChangeIndex={handleChangeIndex}
    />
  );
};
