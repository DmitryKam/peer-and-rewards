import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { fabStyle } from '../../../styles/styles';
import { useStyles } from './AddRewardsIcon.styles';
import { TAddRewardsIconProps } from './types';

export const AddRewardsIcon = ({ handleOpen }: TAddRewardsIconProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.position} onClick={handleOpen}>
        <Fab size={'large'} style={fabStyle}>
          <AddIcon data-testid={'modalIcon'} color={'inherit'} fontSize={'large'} />
        </Fab>
      </div>
    </div>
  );
};
