import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { Button } from '../../common/button/Button';
import { useFirebase } from '../../firebase/firebase';
import { AppRootStateType } from '../../store/store';
import { useStyles } from './HeaderBar.styles';

export const HeaderBar: React.FC = () => {
  const { signOut } = useFirebase();
  const classes = useStyles();
  const auth = useSelector((state: AppRootStateType) => state.auth.auth.isAuth);

  return (
    <AppBar position="static" classes={{ root: classes.appBarContainer }}>
      <Toolbar>
        <Typography variant={'h6'} className={classes.appBarText}>
          Peer and Rewards
        </Typography>
        {auth ? <Button onClick={signOut}>Sign Out</Button> : null}
      </Toolbar>
    </AppBar>
  );
};
