import React from 'react';

import { useStylesLayout } from '../../styles/styles';

export const Layout: React.FC = ({ children }) => {
  const classes = useStylesLayout();

  return <div className={classes.root}>{children}</div>;
};
