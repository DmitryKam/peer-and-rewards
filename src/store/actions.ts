import { EmployeeType } from './types';

// app action
export const addReward = (employee: Array<EmployeeType>, from: string, to: string, why: string) =>
  ({
    type: 'ADD_REWARDS',
    payload: {
      employee,
      from,
      to,
      why,
    },
  } as const);

export const setError = (error: string) =>
  ({
    type: 'SET_ERROR',
    payload: {
      error,
    },
  } as const);

export const resetError = () =>
  ({
    type: 'RESET_ERROR',
  } as const);

export const addEmployee = (name: string, avatar: string) =>
  ({
    type: 'ADD_EMPLOYEE',
    payload: {
      name,
      avatar,
    },
  } as const);

export const deleteCurrentEmployee = (name: string) =>
  ({
    type: 'DELETE_EMPLOYEE',
    payload: {
      name,
    },
  } as const);

// auth action
export const logIn = () =>
  ({
    type: 'LOGIN',
  } as const);

export const logOut = () =>
  ({
    type: 'LOGOUT',
  } as const);

export const setUser = (name: string, email: string, imageUrl: string) =>
  ({
    type: 'SET_USER',
    payload: { name, email, imageUrl },
  } as const);

export const deleteUser = () =>
  ({
    type: 'DELETE_USER',
  } as const);
