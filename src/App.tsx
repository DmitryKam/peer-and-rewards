import React from 'react';

import { Grid } from '@mui/material';

import { ErrorSnackBar } from './components/ErrorSnackBar/ErrorSnackBar';
import { FeelAndRewardsContainer } from './components/FeelAndRewards/FeelAndRewardsContainer';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { Layout } from './components/Layout/Layout';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {
  return (
    <Grid>
      <HeaderBar />
      <Layout>
        <UserInfo />
        <FeelAndRewardsContainer />
      </Layout>
      <ErrorSnackBar />
    </Grid>
  );
};

export default App;
