import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Employee } from './components/Employee/Employee';
import { ErrorSnackBar } from './components/ErrorSnackBar/ErrorSnackBar';
import { FeelAndRewardsContainer } from './components/FeelAndRewards/FeelAndRewardsContainer';
import { Layout } from './components/Layout/Layout';
import { resetError } from './store/actions';
import { useStylesApp } from './styles/styles';
import HeaderBar from './ui/organisms/headerBar';

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
        <Employee />
        <FeelAndRewardsContainer />
      </Layout>
      <ErrorSnackBar handleClose={closeError} />
    </div>
  );
};

export default App;
