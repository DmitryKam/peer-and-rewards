import React from 'react';

import { Avatar, Grid, Tooltip, Typography } from '@mui/material';
import Moment from 'react-moment';

import { avatarItemSize } from '../../../styles/styles';
import { useStyles } from './FeelItem.styles';
import { DataPropsType } from './types';

export const FeedItem: React.FC<DataPropsType> = React.memo(({ from, to, why, date, user }) => {
  const classes = useStyles();

  const imgUrl = from === user.name ? user.imageUrl : '';

  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'start'}
      className={classes.root}
      wrap={'nowrap'}
    >
      <Avatar alt={user.name} sx={avatarItemSize} src={imgUrl} />

      <Grid item container direction={'column'} className={classes.itemsContainer}>
        <Grid item container direction={'column'} className={classes.userContainer}>
          <Typography variant={'body1'}>
            {from} rewarded by {to}
          </Typography>

          <Tooltip title={date.toString()}>
            <Typography variant={'body2'}>
              <Moment className={classes.dateMoment} fromNow>
                {date}
              </Moment>
            </Typography>
          </Tooltip>
        </Grid>
        <Typography variant={'body1'}>{why}</Typography>
      </Grid>
    </Grid>
  );
});
