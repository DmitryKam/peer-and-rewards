import React from 'react';

import { useStyles } from './styles';
import { HeaderTextPropsType } from './types';

const HeaderText: React.FC<HeaderTextPropsType> = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.root}>{text}</div>;
};

export default HeaderText;
