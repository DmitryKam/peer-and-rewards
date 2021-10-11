import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

import { appBarColor, useStylesHeaderBar } from '../../styles/styles';

export const HeaderBar: React.FC = () => {
  const classes = useStylesHeaderBar();

  return (
    <AppBar position="static" style={appBarColor} className={classes.appBarContainer}>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" className={classes.appBarText}>
          Peer Rewards
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
