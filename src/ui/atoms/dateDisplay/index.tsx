import React from 'react';

import { Tooltip } from '@mui/material';
import Moment from 'react-moment';

import { useStyles } from './styles';
import { DateDisplayPropsType } from './types';

const DateDisplay: React.FC<DateDisplayPropsType> = ({ date }) => {
  const classes = useStyles();

  return (
    <Tooltip title={date.toDateString()}>
      <div className={classes.root}>
        <Moment className={classes.showDate} fromNow>
          {date}
        </Moment>
      </div>
    </Tooltip>
  );
};

export default DateDisplay;
