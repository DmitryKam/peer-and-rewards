import { RewardsDataType } from '../store/types';

export const getUserRewards = (rewards: RewardsDataType[], displayName: string | null) => {
  let give = 0;
  let myReward = 0;
  rewards.forEach((reward) => {
    if (reward.from === displayName) {
      return (give += reward.amount);
    }
    if (reward.to === displayName) {
      return (myReward += reward.amount);
    }
  });
  return { give, myReward };
};
