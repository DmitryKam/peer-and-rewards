import React, { useEffect } from 'react';

import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addEmployee } from '../../store/actions';
import { AppRootStateType } from '../../store/store';
import { avatarSize } from '../../styles/styles';
import { Login } from '../Login/Login';
import { useStyles } from './Employee.styles';

export const Employee: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const employees = useSelector((state: AppRootStateType) => state.app.employees);
  const user = useSelector((state: AppRootStateType) => state.auth.user);

  useEffect(() => {
    if (user?.name) {
      dispatch(addEmployee(user?.name, user?.imageUrl));
    }
  }, [dispatch, user?.imageUrl, user?.name]);

  const currentEmployee = employees.find((employee) => employee.name === user?.name);

  if (!currentEmployee) {
    return <Login />;
  }

  return (
    <div className={classes.employeeContainer}>
      <div className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          alt={currentEmployee.name}
          sx={avatarSize}
          src={currentEmployee.avatar}
        />
        <div data-testid={'employeeName'}>{currentEmployee.name}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.rewardsContainer}>
          <div className={classes.textPosition}>My Rewards</div>
          <div data-testid={'myReward'} className={classes.moneyFontSize}>
            ${currentEmployee.myReward}
          </div>
        </div>
        <div className={classes.cashContainer}>
          <div className={classes.textPosition}>Give</div>
          <div data-testid={'give'} className={classes.moneyFontSize}>
            ${currentEmployee.give}
          </div>
        </div>
      </div>
    </div>
  );
};
