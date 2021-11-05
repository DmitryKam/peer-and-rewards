import React from 'react';

import { useStyle } from './styles';
import { UserNamePropsType } from './types';

const UserName: React.FC<UserNamePropsType> = ({ name }) => {
  const classes = useStyle();
  return <div className={classes.root}>{name}</div>;
};

export default UserName;
