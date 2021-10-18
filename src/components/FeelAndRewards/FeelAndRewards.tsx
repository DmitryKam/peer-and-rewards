import React, { SyntheticEvent } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { a11yProps } from '../../helpers/helpers';
import { EmployeeType, AppInitialStateType, RewardsDataType } from '../../store/types';
import { fabStyle, useStylesFellAndRewards } from '../../styles/styles';
import { FeedItem } from '../FeedItem/FeedItem';
import { ModalForm } from '../ModalForm/ModalForm';
import { TabPanel } from '../TabPanel/TabPanel';

type FeelAndRewardsPropsType = {
  value: number;
  open: boolean;
  state: AppInitialStateType;
  addRewardToEmployee: (to: string, amount: number, why: string) => void;
  myRewards: Array<RewardsDataType>;
  autocompleteData: string[];
  currentEmployee: EmployeeType;
  handleOpen: () => void;
  handleClose: () => void;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
  handleChangeIndex: (index: number) => void;
};

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
    handleChangeIndex,
  }) => {
    const theme = useTheme();
    const classes = useStylesFellAndRewards();
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
        <Tabs
          className={classes.tabsContainer}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="feed"
        >
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="My Rewards" {...a11yProps(1)} />
        </Tabs>
        <hr />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.itemContainer}
        >
          <TabPanel value={value} index={value}>
            {state.rewardsData.map((data, index) => {
              return <FeedItem key={data.from + index} employees={state.employees} {...data} />;
            })}
          </TabPanel>
          <TabPanel value={value} index={value}>
            {myRewards.map((data, index) => {
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
            })}
          </TabPanel>
        </SwipeableViews>
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
