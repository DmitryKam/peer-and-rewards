import React from 'react';
import { SyntheticEvent, useContext, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { a11yProps } from '../../helpers/helpers';
import { AppContext } from '../../store/appContext';
import { fabStyle, useStylesFellAndRewards } from '../../styles/styles';
import { FeedItem } from '../FeedItem/FeedItem';
import { TabPanel } from '../Layout/TabPanel/TabPanel';
import { ModalForm } from '../ModalForm/ModalForm';

export const FeelAndRewards = () => {
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme();
  const classes = useStylesFellAndRewards();
  const { state, addRewardToEmployee, myRewards, autocompleteData, currentEmployee } =
    useContext(AppContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

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
            return <FeedItem key={data.from + index} employees={state.employee} {...data} />;
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
                employees={state.employee}
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
};
