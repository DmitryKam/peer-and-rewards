import React from 'react';

import { useStyle } from './styles';
import { CurrencyTextPropsType } from './types';

const CurrencyText: React.FC<CurrencyTextPropsType> = ({ amountCurrency }) => {
  const classes = useStyle();
  return <div className={classes.root}>${amountCurrency}</div>;
};

export default CurrencyText;
