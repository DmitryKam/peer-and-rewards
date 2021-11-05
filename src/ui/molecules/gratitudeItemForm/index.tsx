import React from 'react';

import { useStyles } from './styles';
import { GratitudeItemFormPropsType } from './types';

const GratitudeItemForm: React.FC<GratitudeItemFormPropsType> = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default GratitudeItemForm;
