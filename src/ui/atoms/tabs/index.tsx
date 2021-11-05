import React from 'react';

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

import { StyledTabsProps } from './types';

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  marginLeft: 120,
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#911b91',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
  },
  '@media (max-width: 580px)': {
    marginLeft: 20,
  },
});

export default StyledTabs;
