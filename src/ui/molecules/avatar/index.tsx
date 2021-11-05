import React from 'react';

import { Avatar } from '@mui/material';

import UserName from '../../atoms/texts/userName';
import { avatarSize } from './styles';
import { useStyle } from './styles';
import { AvatarPropsType } from './types';

const UserAvatar: React.FC<AvatarPropsType> = ({ userName, userAvatar }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} alt={userName} sx={avatarSize} src={userAvatar} />
      <UserName name={userName} />
    </div>
  );
};

export default UserAvatar;
