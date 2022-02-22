import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { useStyles } from './AddRewardsIcon.styles';
import { TAddRewardsIconProps } from './types';

export const AddRewardsIcon = ({ handleOpen }: TAddRewardsIconProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.position} onClick={handleOpen}>
        <Fab size={'large'} classes={{ root: classes.icon }}>
          <AddIcon data-testid={'modalIcon'} color={'inherit'} fontSize={'large'} />
        </Fab>
      </div>
    </div>
  );
};
