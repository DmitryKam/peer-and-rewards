import { SyntheticEvent } from 'react';

import { RewardsDataType, UserType } from '../../store/types';

export type FeelAndRewardsPropsType = {
  value: number;
  open: boolean;
  rewardsData: RewardsDataType[];
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  myRewards: Array<RewardsDataType>;
  autocompleteData: string[];
  user: UserType;
  handleOpen: () => void;
  handleClose: () => void;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
};
