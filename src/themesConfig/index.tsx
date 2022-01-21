import { Theme } from '@mui/material';

import { darkTheme as dark } from './themes/dark';
import { lightTheme as light } from './themes/light';

const themeMap: {
  [key: string]: Theme;
} = {
  light,
  dark,
};

export const getThemeByName = (theme: string): Theme => themeMap[theme];
