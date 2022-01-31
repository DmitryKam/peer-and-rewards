import React from 'react';

import { Grid, Typography } from '@mui/material';

import { a11yProps } from '../../helpers/helpers';
import { RewardsDialog } from '../ModalForm/RewardsDialog';
import { TabPanel } from '../TabPanel/TabPanel';
import { AddRewardsIcon } from './addRewardsIcon/AddRewardsIcon';
import { FeedItem } from './FeedItem/FeedItem';
import { useStyles } from './FeelAndRewards.styles';
import { Tab } from './Tabs/StyledTabs/Tab';
import { Tabs } from './Tabs/StyledTabs/Tabs';
import { FeelAndRewardsPropsType } from './types';

export const FeelAndRewards: React.FC<FeelAndRewardsPropsType> = React.memo(
  ({
    open,
    value,
    rewardsData,
    addRewardToEmployee,
    myRewards,
    autocompleteData,
    user,
    handleOpen,
    handleClose,
    handleChange,
  }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AddRewardsIcon handleOpen={handleOpen} />
        <Tabs value={value} onChange={handleChange} aria-label="feed">
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="My Rewards" {...a11yProps(1)} />
        </Tabs>
        <hr />
        <Grid className={classes.itemContainer}>
          <TabPanel value={value} index={0}>
            {rewardsData.map((data, index) => {
              return <FeedItem key={data.from + index} user={user} {...data} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {myRewards.length ? (
              myRewards.map((data, index) => {
                return <FeedItem key={data.from + index} user={user} {...data} />;
              })
            ) : (
              <Typography variant={'h5'} className={classes.noMyRewards}>
                No rewards sent
              </Typography>
            )}
          </TabPanel>
        </Grid>

        <RewardsDialog
          open={open}
          handleClose={handleClose}
          addRewardToEmployee={addRewardToEmployee}
          autocompleteData={autocompleteData}
        />
      </div>
    );
  },
);
