import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { a11yProps } from '../../helpers/helpers';
import { fabStyle } from '../../styles/styles';
import { FeedItem } from '../FeedItem/FeedItem';
import { ModalForm } from '../ModalForm/ModalForm';
import { TabPanel } from '../TabPanel/TabPanel';
import { useStyles } from './FeelAndRewards.styles';
import { StyledTab, StyledTabs } from './Tabs/StyledTabs/StyledTabs';
import { FeelAndRewardsPropsType } from './types';

export const FeelAndRewards: React.FC<FeelAndRewardsPropsType> = React.memo(
  ({
    open,
    value,
    state,
    addRewardToEmployee,
    myRewards,
    autocompleteData,
    currentEmployee,
    handleOpen,
    handleClose,
    handleChange,
  }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div className={classes.iconContainer}>
          <div className={classes.iconPosition}>
            <Fab size={'large'} style={fabStyle}>
              <AddIcon
                data-testid={'modalIcon'}
                color={'inherit'}
                fontSize={'large'}
                onClick={handleOpen}
              />
            </Fab>
          </div>
        </div>
        <StyledTabs value={value} onChange={handleChange} aria-label="feed">
          <StyledTab label="Feed" {...a11yProps(0)} />
          <StyledTab label="My Rewards" {...a11yProps(1)} />
        </StyledTabs>
        <hr />
        <div className={classes.itemContainer}>
          <TabPanel value={value} index={0}>
            {state.rewardsData.map((data, index) => {
              return <FeedItem key={data.from + index} employees={state.employees} {...data} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {myRewards.length ? (
              myRewards.map((data, index) => {
                return (
                  <FeedItem
                    key={data.from + index}
                    from={data.from}
                    to={data.to}
                    why={data.why}
                    date={data.date}
                    employees={state.employees}
                  />
                );
              })
            ) : (
              <div className={classes.noMyRewards}>No rewards sent</div>
            )}
          </TabPanel>
        </div>
        <ModalForm
          data-testid={'modalOpen'}
          open={open}
          handleClose={handleClose}
          amount={currentEmployee.myReward}
          addRewardToEmployee={addRewardToEmployee}
          autocompleteData={autocompleteData}
        />
      </div>
    );
  },
);
