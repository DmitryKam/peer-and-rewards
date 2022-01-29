import React from 'react';

import { useStyles } from './ErrorItem.styles';

export const ErrorItem: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
