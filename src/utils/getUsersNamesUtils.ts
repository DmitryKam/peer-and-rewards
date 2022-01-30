import { RewardsDataType, UserType } from '../store/types';

export const getUsersNamesUtils = (rewardsData: RewardsDataType[], user: UserType) => {
  const autocompleteData: Array<string> = [];

  rewardsData.map((reward) => {
    if (autocompleteData.includes(reward.from)) {
      if (!autocompleteData.includes(reward.to)) {
        if (reward.to === user.name) {
          return;
        }
        return autocompleteData.push(reward.to);
      }
      return;
    }
    if (autocompleteData.includes(reward.to)) {
      if (!autocompleteData.includes(reward.from)) {
        if (reward.from === user.name) {
          return;
        }
        return autocompleteData.push(reward.from);
      }
      return;
    }

    if (reward.from !== user.name) {
      autocompleteData.push(reward.from);
    }
    if (reward.to !== user.name) {
      autocompleteData.push(reward.to);
    }
  });
  return autocompleteData;
};
