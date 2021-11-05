import React from 'react';

import { useStyles } from './styles';
import { GratitudeItemTextPropsType } from './types';

const GratitudeItemText: React.FC<GratitudeItemTextPropsType> = ({ why }) => {
  const classes = useStyles();
  return <div className={classes.root}>{why}</div>;
};

export default GratitudeItemText;
