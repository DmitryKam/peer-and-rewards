import React, { useEffect } from 'react';

import { Employee } from './components/Employee/Employee';
import { FeelAndRewardsContainer } from './components/FeelAndRewards/FeelAndRewardsContainer';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { Layout } from './components/Layout/Layout';
import { AppState } from './store/AppState';
import { useStylesApp } from './styles/styles';

export const App: React.FC = () => {
  const classes = useStylesApp();

  useEffect(() => {
    document.title = 'Peer Rewards';
  }, []);

  return (
    <div className={classes.root}>
      <AppState>
        <HeaderBar />
        <Layout>
          <Employee />
          <FeelAndRewardsContainer />
        </Layout>
      </AppState>
    </div>
  );
};

export default App;
