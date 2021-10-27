import React from 'react';

import { useStylesErrorItem } from '../../../styles/styles';

export const ErrorItem: React.FC = ({ children }) => {
  const classes = useStylesErrorItem();
  return <div className={classes.root}>{children}</div>;
};
