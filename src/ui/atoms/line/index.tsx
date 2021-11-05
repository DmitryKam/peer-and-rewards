import React from 'react';

import { useStyle } from './styles';

const Line: React.FC = () => {
  const classes = useStyle();
  return <hr className={classes.root} />;
};

export default Line;
