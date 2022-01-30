import React from 'react';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useStyles } from './StyledTabs.styles';
import { StyledTabProps, StyledTabsProps } from './types';

export const StyledTabs = (props: StyledTabsProps) => {
  const classes = useStyles();

  return (
    <Tabs {...props} TabIndicatorProps={{ children: <span className={classes.indicatorSpan} /> }} />
  );
};

export const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.dark,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 30,
    padding: '5px 20px 5px 20px',
    boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
    marginBottom: 5,
    width: 150,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: '#000a34',
      transition: 'all 200ms ease',
      cursor: 'pointer',
      border: 'none',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'red',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12),
      width: 120,
    },
  }),
);
