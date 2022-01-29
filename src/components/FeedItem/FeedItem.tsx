import React from 'react';

import { Avatar, Tooltip } from '@mui/material';
import Moment from 'react-moment';

import { avatarItemSize } from '../../styles/styles';
import { useStyles } from './FeelItem.styles';
import { DataPropsType } from './types';

export const FeedItem: React.FC<DataPropsType> = React.memo(
  ({ from, to, why, date, employees }) => {
    const classes = useStyles();

    const employee = employees.find((empl) => empl.name === from);
    if (!employee) {
      return null;
    }

    return (
      <div className={classes.root}>
        <Avatar alt={employee.name} sx={avatarItemSize} src={employee.avatar} />
        <div className={classes.feedContainer}>
          <div className={classes.userContainer}>
            <div>
              {from} rewarded by {to}
            </div>

            <Tooltip title={date.toDateString()}>
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
  },
);
