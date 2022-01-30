import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

import { breakpoints } from './breakpoints';
import { colors } from './colors';

const theme = createTheme({
  breakpoints,
  palette: {
    mode: 'light',
    primary: {
      light: colors.white,
      dark: colors.darkGray,
      main: colors.primaryRed,
    },
    text: {
      primary: colors.black,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: colors.black,
          },
          '&.MuiOutlinedInput-root.Mui-focused > fieldset': {
            borderColor: colors.whiteSmoke,
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: colors.shuttleGray,
        },
      },
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       outlinedSecondary: {
  //         background: colors.paleBlack,
  //         border: `1px solid ${colors.shuttleGray}`,
  //         color: colors.mistGray,
  //         '&:hover': {
  //           background: colors.lightBlack,
  //           border: `1px solid ${colors.shuttleGray}`,
  //         },
  //       },
  //     },
  //   },
  // },
});
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
