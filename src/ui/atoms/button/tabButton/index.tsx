import React from 'react';

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

import { StyledTabProps } from './types';

export const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    fontFamily: 'Circular Std,sans-serif',
    color: '#000a34',
    backgroundColor: '#fff',
    border: '2px solid black',
    borderRadius: 10,
    padding: '5px 20px 5px 20px',
    boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
    marginBottom: 5,
    width: 140,
    '&.Mui-selected': {
      backgroundColor: '#ffc126',
      color: '#000a34',
      transition: 'all 200ms ease',
      cursor: 'pointer',
      border: 'none',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'red',
    },
  }),
);
