import React, { SyntheticEvent } from 'react';

import { AppInitialStateType, EmployeeType, RewardsDataType } from '../../store/types';
import { useStylesFellAndRewards } from '../../styles/styles';
import TabsButtonAndIconContainer from '../../ui/organisms/tabsButtonAndIconContainer';
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
        <TabsButtonAndIconContainer
          value={value}
          handleOpen={handleOpen}
          handleChange={handleChange}
        />
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
