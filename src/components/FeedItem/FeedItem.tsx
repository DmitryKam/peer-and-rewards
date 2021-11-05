import React from 'react';

import { Avatar, Tooltip } from '@mui/material';
import Moment from 'react-moment';

import { EmployeeType } from '../../store/types';
import { avatarItemSize, useStylesFeedItem } from '../../styles/styles';
import DateDisplay from '../../ui/atoms/dateDisplay';
import FeedItemText from '../../ui/atoms/texts/feedItemText';
import GratitudeItemText from '../../ui/atoms/texts/gratitudeItemText';

type DataPropsType = {
  from: string;
  to: string;
  why: string;
  date: Date;
  employees: Array<EmployeeType>;
};

export const FeedItem: React.FC<DataPropsType> = React.memo(
  ({ from, to, why, date, employees }) => {
    const classes = useStylesFeedItem();

    const employee = employees.find((empl) => empl.name === from);
    if (!employee) {
      return null;
    }

    return (
      <div className={classes.root}>
        <Avatar alt={employee.name} sx={avatarItemSize} src={employee.avatar} />
        <div className={classes.feedContainer}>
          <div className={classes.userContainer}>
            <FeedItemText from={from} to={to} />
            <DateDisplay date={date} />
          </div>
          <GratitudeItemText why={why} />
        </div>
      </div>
    );
  },
);
