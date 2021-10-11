import { EmployeeType } from './types';

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
