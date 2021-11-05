import React from 'react';

import { useStyles } from './styles';
import { InfoTextPropsType } from './types';

const InfoText: React.FC<InfoTextPropsType> = ({ text }) => {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
};

export default InfoText;
