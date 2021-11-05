import React from 'react';

export type TabFormPropsType = {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};
