import { EmployeeType } from '../../../store/types';

export type GratitudeItemFormPropsType = {
  from: string;
  to: string;
  why: string;
  date: Date;
  employees: Array<EmployeeType>;
};
