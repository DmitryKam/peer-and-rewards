import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Login } from '../../../components/Login/Login';
import { addEmployee } from '../../../store/actions';
import { AppRootStateType } from '../../../store/store';
import { UserContainer } from '../userContainer';

export const Employee: React.FC = () => {
  const dispatch = useDispatch();
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
    <UserContainer
      currentUserAvatar={currentEmployee.avatar}
      currentUserGive={currentEmployee.give}
      currentUserName={currentEmployee.name}
      currentUserRewards={currentEmployee.myReward}
    />
  );
};
