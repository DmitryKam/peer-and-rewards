import React from 'react';

import { Avatar, Tooltip } from '@mui/material';
import Moment from 'react-moment';

import { avatarItemSize } from '../../styles/styles';
import { useStyles } from './FeelItem.styles';
import { DataPropsType } from './types';

export const FeedItem: React.FC<DataPropsType> = React.memo(({ from, to, why, date, user }) => {
  const classes = useStyles();

  const imgUrl = from === user.name ? user.imageUrl : '';
  return (
    <div className={classes.root}>
      <Avatar alt={user.name} sx={avatarItemSize} src={imgUrl} />
      <div className={classes.feedContainer}>
        <div className={classes.userContainer}>
          <div>
            {from} rewarded by {to}
          </div>

          <Tooltip title={date.toString()}>
            <span className={classes.dateStyle}>
              <Moment className={classes.dateMoment} fromNow>
                {date}
              </Moment>
            </span>
          </Tooltip>
        </div>
        <div className={classes.feedInfo}>{why}</div>
      </div>
    </div>
  );
});
