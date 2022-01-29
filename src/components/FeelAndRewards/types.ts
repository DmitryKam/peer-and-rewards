import { SyntheticEvent } from 'react';

import { AppInitialStateType, EmployeeType, RewardsDataType } from '../../store/types';

export type FeelAndRewardsPropsType = {
  value: number;
  open: boolean;
  state: AppInitialStateType;
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  myRewards: Array<RewardsDataType>;
  autocompleteData: string[];
  currentEmployee: EmployeeType;
  handleOpen: () => void;
  handleClose: () => void;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
};
