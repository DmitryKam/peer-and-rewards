import React from 'react';

import { Tab as MuiTab } from '@mui/material';

import { useStyles } from './Tabs.styles';
import { StyledTabProps } from './types';

export const Tab = ({ ...props }: StyledTabProps) => {
  const classes = useStyles();

  return <MuiTab className={classes.tab} disableRipple {...props} />;
};
