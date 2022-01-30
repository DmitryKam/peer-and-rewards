import React, { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { resetError } from '../../store/actions';
import { AppRootStateType } from '../../store/store';
import { fetchRewards, setReward } from '../../store/thunks';
import { getUsersNamesUtils } from '../../utils/getUsersNamesUtils';
import { FeelAndRewards } from './FeelAndRewards';

export const FeelAndRewardsContainer = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const user = useSelector((state: AppRootStateType) => state.auth.user);
  const { rewardsData } = useSelector((state: AppRootStateType) => state.app);
  const myRewards = rewardsData.filter((rewardItem) => rewardItem.from === user?.name);

  useEffect(() => {
    dispatch(fetchRewards());
  }, [dispatch]);

  const autocompleteData = useMemo(() => {
    if (user) {
      return getUsersNamesUtils(rewardsData, user);
    }

    return [];
  }, [rewardsData, user]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const addRewardToEmployee = useCallback(
    (to: string, amount: number, why: string) => {
      dispatch(resetError());
      dispatch(setReward(to, amount, why, handleClose));
    },
    [dispatch],
  );

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!user) {
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
      rewardsData={rewardsData}
      user={user}
      handleChange={handleChange}
      handleOpen={handleOpen}
    />
  );
};
