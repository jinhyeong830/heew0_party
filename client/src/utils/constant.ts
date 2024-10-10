import { isOverBirthdayThisYear } from './utils';
export const THIS_YEAR = new Date().getFullYear();
export const BIRTH_YEAR_YET = isOverBirthdayThisYear(`${new Date().getFullYear()}-06-04`)
  ? new Date().getFullYear()
  : new Date().getFullYear() + 1;
export const HEEW_BIRTH = `${BIRTH_YEAR_YET}-06-04`;
export const HEEW_NAME = '희원';
