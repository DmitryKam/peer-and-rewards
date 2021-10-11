import React from 'react';

import Typography from '@mui/material/Typography';

import { useStylesTabPanel } from '../../../styles/styles';

type TabPanelPropsType = {
  value: number;
  index: number;
};

export const TabPanel: React.FC<TabPanelPropsType> = React.memo(({ children, value, index }) => {
  const classes = useStylesTabPanel();
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
