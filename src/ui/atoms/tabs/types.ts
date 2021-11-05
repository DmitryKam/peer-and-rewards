import React from 'react';

export type StyledTabsProps = {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
};
