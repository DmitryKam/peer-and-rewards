import React from 'react';

import { a11yProps } from '../../../helpers/helpers';
import { StyledTab } from '../../atoms/button/tabButton';
import StyledTabs from '../../atoms/tabs';
import { TabFormPropsType } from './types';

const TabsForm: React.FC<TabFormPropsType> = ({ value, handleChange }) => {
  return (
    <StyledTabs value={value} onChange={handleChange} aria-label="feed">
      <StyledTab label="Feed" {...a11yProps(0)} />
      <StyledTab label="My Rewards" {...a11yProps(1)} />
    </StyledTabs>
  );
};

export default TabsForm;
