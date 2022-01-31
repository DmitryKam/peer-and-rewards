import React from 'react';

import { Tabs as MuiTabs } from '@mui/material';

import { useStyles } from './Tabs.styles';
import { StyledTabsProps } from './types';

export const Tabs = ({ ...props }: StyledTabsProps) => {
  const classes = useStyles();

  return (
    <MuiTabs
      {...props}
      TabIndicatorProps={{ children: <span className={classes.indicatorSpan} /> }}
    />
  );
};
