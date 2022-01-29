import React from 'react';

import Typography from '@mui/material/Typography';

import { useStyles } from './TabPanel.styles';
import { TabPanelPropsType } from './types';

export const TabPanel: React.FC<TabPanelPropsType> = React.memo(({ children, value, index }) => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
    >
      {children}
    </Typography>
  );
});
