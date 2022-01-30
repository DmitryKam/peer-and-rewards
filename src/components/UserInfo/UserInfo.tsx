import React from 'react';

import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../store/store';
import { avatarSize } from '../../styles/styles';
import { Login } from '../Login/Login';
import { useStyles } from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  const classes = useStyles();
  const user = useSelector((state: AppRootStateType) => state.auth.user);

  if (!user) {
    return <Login />;
  }

  return (
    <div className={classes.employeeContainer}>
      <div className={classes.avatarContainer}>
        <Avatar className={classes.avatar} alt={user.name} sx={avatarSize} src={user.imageUrl} />
        <div data-testid={'employeeName'}>{user.name}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.rewardsContainer}>
          <div className={classes.textPosition}>My Rewards</div>
          <div data-testid={'myReward'} className={classes.moneyFontSize}>
            ${user.myRewards}
          </div>
        </div>
        <div className={classes.cashContainer}>
          <div className={classes.textPosition}>Give</div>
          <div data-testid={'give'} className={classes.moneyFontSize}>
            ${user.give}
          </div>
        </div>
      </div>
    </div>
  );
};
