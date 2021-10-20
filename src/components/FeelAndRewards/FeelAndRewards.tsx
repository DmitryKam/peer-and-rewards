import React, { SyntheticEvent } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { a11yProps } from '../../helpers/helpers';
import { AppInitialStateType, EmployeeType, RewardsDataType } from '../../store/types';
import { fabStyle, useStylesFellAndRewards } from '../../styles/styles';
import { FeedItem } from '../FeedItem/FeedItem';
import { ModalForm } from '../ModalForm/ModalForm';
import { TabPanel } from '../TabPanel/TabPanel';
import { StyledTab, StyledTabs } from './Tabs/StyledTabs/StyledTabs';

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
  }) => {
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
