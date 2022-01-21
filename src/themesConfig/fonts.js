import PlusJakartaSansLight from '../assets/fonts/PlusJakartaSans/PlusJakartaSans-Light.woff2';
import PlusJakartaSansMedium from '../assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.woff2';
import PlusJakartaSansRegular from '../assets/fonts/PlusJakartaSans/PlusJakartaSans-Regular.woff2';

export const jakartaLight = {
  fontFamily: 'PlusJakartaSans',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `local('PlusJakartaSans-Light'), url(${PlusJakartaSansLight}) format('woff2')`,
};

export const jakartaRegular = {
  fontFamily: 'PlusJakartaSans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local('PlusJakartaSans'), local('PlusJakartaSans-Regular'), url(${PlusJakartaSansRegular}) format('woff2')`,
};

export const jakartaMedium = {
  fontFamily: 'PlusJakartaSans',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `local('PlusJakartaSans-Medium'), url(${PlusJakartaSansMedium}) format('woff2')`,
};
