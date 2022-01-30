import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { ErrorSnackBar } from './components/ErrorSnackBar/ErrorSnackBar';
import { FeelAndRewardsContainer } from './components/FeelAndRewards/FeelAndRewardsContainer';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { Layout } from './components/Layout/Layout';
import { UserInfo } from './components/UserInfo/UserInfo';
import { resetError } from './store/actions';
import { useStylesApp } from './styles/styles';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStylesApp();

  const closeError = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(resetError());
    },
    [dispatch],
  );

  return (
    <div className={classes.root}>
      <HeaderBar />
      <Layout>
        <UserInfo />
        <FeelAndRewardsContainer />
      </Layout>
      <ErrorSnackBar handleClose={closeError} />
    </div>
  );
};

export default App;
