import React from 'react';

import Icon from '../../atoms/icon/addRewardIcon';
import Line from '../../atoms/line';
import TabsForm from '../../molecules/tabsForm';
import { useStyle } from './styles';
import { TabsButtonAndIconContainerPropsType } from './types';

const TabsButtonAndIconContainer: React.FC<TabsButtonAndIconContainerPropsType> = ({
  value,
  handleOpen,
  handleChange,
}) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.icon}>
          <Icon onIconClick={handleOpen} />
        </div>
      </div>
      <TabsForm value={value} handleChange={handleChange} />
      <Line />
    </>
  );
};

export default TabsButtonAndIconContainer;
