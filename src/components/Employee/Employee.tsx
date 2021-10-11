import React, { useContext } from 'react';

import { Avatar } from '@mui/material';

import { AppContext } from '../../store/appContext';
import { useStylesEmployee } from '../../styles/styles';

export const Employee: React.FC = () => {
  const classes = useStylesEmployee();
  const { currentEmployee } = useContext(AppContext);

  return (
    <div className={classes.employeeContainer}>
      <div className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          alt={currentEmployee.name}
          sx={{ width: 76, height: 76 }}
          src={currentEmployee.avatar}
        />
        <div data-testid={'employeeName'}>{currentEmployee.name}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.rewardsContainer}>
          <div style={{ marginBottom: 10 }}>My Rewards</div>
          <div data-testid={'myReward'} className={classes.moneyFontSize}>
            ${currentEmployee.myReward}
          </div>
        </div>
        <div className={classes.cashContainer}>
          <div style={{ marginBottom: 10 }}>Give</div>
          <div data-testid={'give'} className={classes.moneyFontSize}>
            ${currentEmployee.give}
          </div>
        </div>
      </div>
    </div>
  );
};
