import React, { useEffect } from 'react';

import { Avatar, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AppRootStateType } from '../../store/store';
import { updateAmount } from '../../store/thunks';
import { Login } from '../Login/Login';
import { useStyles } from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  const classes = useStyles();
  const user = useSelector((state: AppRootStateType) => state.auth.user);
  const rewards = useSelector((state: AppRootStateType) => state.app.rewardsData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(' rewards.length', rewards.length);
    dispatch(updateAmount());
  }, [dispatch, rewards.length]);
  if (!user) {
    return <Login />;
  }

  return (
    <Grid container spacing={2} className={classes.container} alignItems={'center'}>
      <Grid item xs={5}>
        <Avatar alt={user.name} classes={{ root: classes.avatar }} src={user.imageUrl} />
        <Typography variant={'body1'}>{user.name}</Typography>
      </Grid>
      <Grid item xs={6} alignItems={'center'}>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant={'body1'}>My Rewards</Typography>
            <Typography variant={'h5'} className={classes.userAmount}>
              ${user.myRewards}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'body1'}>Give</Typography>
            <Typography variant={'h5'} className={classes.userAmount}>
              ${user.give}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
