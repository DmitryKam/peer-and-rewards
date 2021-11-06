import React from 'react';

import { FeedAndRewardsContainer } from './components/FeelAndRewards/FeedAndRewardsContainer';
import { Layout } from './components/Layout/Layout';
import { useStylesApp } from './styles/styles';
import { Employee } from './ui/organisms/Employee/Employee';
import HeaderBar from './ui/organisms/headerBar';

export const App: React.FC = () => {
  const classes = useStylesApp();

  return (
    <div className={classes.root}>
      <HeaderBar />
      <Layout>
        <Employee />
        <FeedAndRewardsContainer />
      </Layout>
    </div>
  );
};

export default App;
