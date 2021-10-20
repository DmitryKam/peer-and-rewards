import React, { useContext, useEffect } from 'react';

import { Avatar } from '@mui/material';

import { AppContext } from '../../store/appContext/appContext';
import { AuthContext } from '../../store/authContext/authContext';
import { useStylesEmployee } from '../../styles/styles';
import { Login } from '../Login/Login';

export const Employee: React.FC = () => {
  const classes = useStylesEmployee();
  const { state, setEmployee } = useContext(AppContext);
  const { state: authState } = useContext(AuthContext);

  useEffect(() => {
    setEmployee();
  }, [setEmployee]);

  const currentEmployee = state.employees.find(
    (employee) => employee.name === authState.user?.name,
  );

  if (!currentEmployee) {
    return <Login />;
  }

  return (
    <div className={classes.employeeContainer}>
      <div className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          alt={currentEmployee.name}
          sx={{ width: 86, height: 86 }}
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
