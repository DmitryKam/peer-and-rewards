import React from 'react';

import { Grid } from '@mui/material';

import UserAvatar from '../../molecules/avatar';
import ReceiveAndFiveRewardsForm from '../../molecules/ReceiveAndFiveRewardsForm';
import { UserContainerPropsType } from './types';

export const UserContainer: React.FC<UserContainerPropsType> = ({
  currentUserName,
  currentUserAvatar,
  currentUserGive,
  currentUserRewards,
}) => {
  return (
    <Grid container style={{ marginTop: 40 }}>
      <Grid item xs={4} md={4}>
        <UserAvatar userName={currentUserName} userAvatar={currentUserAvatar} />
      </Grid>
      <Grid item xs={8} md={8}>
        <ReceiveAndFiveRewardsForm myReward={currentUserRewards} give={currentUserGive} />
      </Grid>
    </Grid>
  );
};
