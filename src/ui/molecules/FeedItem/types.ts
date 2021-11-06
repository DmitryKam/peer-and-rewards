import { EmployeeType } from '../../../store/types';

export type DataPropsType = {
  from: string;
  to: string;
  why: string;
  date: Date;
  employees: Array<EmployeeType>;
};
