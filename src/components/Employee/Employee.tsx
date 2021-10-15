import React, { useContext } from 'react';

import { Avatar } from '@mui/material';

import { AppContext } from '../../store/appContext';
import { useStylesEmployee } from '../../styles/styles';
import { Login } from '../Login/Login';

export const Employee: React.FC = () => {
  const classes = useStylesEmployee();
  const { currentEmployee, state } = useContext(AppContext);

  if (!state.user) {
    return <Login />;
  }

  return (
    <div className={classes.employeeContainer}>
      <div className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          alt={currentEmployee.name}
          sx={{ width: 86, height: 86 }}
          src={state.user.imageUrl}
        />
        <div data-testid={'employeeName'}>{state.user.name}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.rewardsContainer}>
          <div style={{ marginBottom: 10 }}>My Rewards</div>
          <div data-testid={'myReward'} className={classes.moneyFontSize}>
            ${state.user.myRewards}
          </div>
        </div>
        <div className={classes.cashContainer}>
          <div style={{ marginBottom: 10 }}>Give</div>
          <div data-testid={'give'} className={classes.moneyFontSize}>
            ${state.user.give}
          </div>
        </div>
      </div>
    </div>
  );
};
