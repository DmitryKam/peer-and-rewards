import React, { useEffect } from 'react';

import { Employee } from './components/Employee/Employee';
import { FeelAndRewardsContainer } from './components/FeelAndRewards/FeelAndRewardsContainer';
import { HeaderBar } from './components/HeaderBar/HeaderBar';
import { Layout } from './components/Layout/Layout';
import { AppState } from './store/appContext/AppState';
import { AuthState } from './store/authContext/AuthState';
import { useStylesApp } from './styles/styles';

export const App: React.FC = () => {
  const classes = useStylesApp();

  useEffect(() => {
    document.title = 'Peer Rewards';
  }, []);

  return (
    <div className={classes.root}>
      <AuthState>
        <AppState>
          <HeaderBar />
          <Layout>
            <Employee />
            <FeelAndRewardsContainer />
          </Layout>
        </AppState>
      </AuthState>
    </div>
  );
};

export default App;
