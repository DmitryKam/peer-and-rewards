import React from 'react';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

type StyledTabsProps = {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#911b91',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
  },
});

type StyledTabProps = {
  label: string;
};

export const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#000a34',
    border: '2px solid black',
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

    [theme.breakpoints.down('mobile')]: {
      fontSize: theme.typography.pxToRem(12),
      width: 120,
    },
  }),
);
