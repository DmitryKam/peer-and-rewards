import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { useStyle } from './styles';
import { fabStyle } from './styles';
import { IconPropsType } from './types';

const Icon: React.FC<IconPropsType> = ({ onIconClick }) => {
  const classes = useStyle();
  return (
    <Fab size={'large'} style={fabStyle} onClick={onIconClick}>
      <AddIcon className={classes.icon} color={'inherit'} fontSize={'large'} />
    </Fab>
  );
};

export default Icon;
