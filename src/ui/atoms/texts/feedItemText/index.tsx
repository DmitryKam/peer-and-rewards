import React from 'react';

import { Locales } from '../../../../locales';
import { useStyles } from './styles';
import { FeedItemTextPropsType } from './types';

const FeedItemText: React.FC<FeedItemTextPropsType> = ({ from, to }) => {
  const classes = useStyles();
  return (
    <div>
      {from} <span className={classes.purpleText}>{Locales.REWARDER_BY}</span> {to}
    </div>
  );
};
export default FeedItemText;
