import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { breakpoints } from './breakpoints';
import { colors } from './colors';

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const theme = createTheme({
    breakpoints,
    palette: {
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

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
