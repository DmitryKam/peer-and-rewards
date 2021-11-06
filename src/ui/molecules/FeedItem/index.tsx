import React from 'react';

import { Avatar } from '@mui/material';

import DateDisplay from '../../atoms/dateDisplay';
import FeedItemText from '../../atoms/texts/feedItemText';
import GratitudeItemText from '../../atoms/texts/gratitudeItemText';
import { avatarItemSize, useStyles } from './styles';
import { DataPropsType } from './types';

const FeedItem: React.FC<DataPropsType> = React.memo(({ from, to, why, date, employees }) => {
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
          <FeedItemText from={from} to={to} />
          <DateDisplay date={date} />
        </div>
        <GratitudeItemText why={why} />
      </div>
    </div>
  );
});

export default FeedItem;
