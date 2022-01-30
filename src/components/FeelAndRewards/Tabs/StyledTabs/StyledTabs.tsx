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
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 30,
    padding: '5px 20px 5px 20px',
    boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
    marginBottom: 5,
    width: 150,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
      transition: 'all 200ms ease',
      cursor: 'pointer',
      border: 'none',
    },
    '&.Mui-focusVisible': {
      backgroundColor: `${theme.palette.primary.main}`,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12),
      width: 120,
    },
  }),
);
