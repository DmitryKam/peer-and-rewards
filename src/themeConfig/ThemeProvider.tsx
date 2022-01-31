import { createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { typography } from './typography';

const theme = createTheme({
  breakpoints,
  typography,
  palette: {
    mode: 'light',
    primary: {
      light: colors.white,
      dark: colors.darkGray,
      main: colors.primaryRed,
    },
    secondary: {
      light: colors.white,
      dark: colors.darkGray,
      main: colors.platinumGray,
    },
    text: {
      primary: colors.black,
    },
    background: {
      default: colors.platinumGray,
      paper: colors.whiteSmoke,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: colors.whiteSmoke,
        },

        notchedOutline: {
          borderColor: colors.silverGray,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        outlinedSecondary: {
          background: colors.whiteSmoke,
          border: `1px solid ${colors.echoBlue}`,
          color: colors.eastBay,
          '&:hover': {
            background: colors.solitude,
            border: `1px solid ${colors.echoBlue}`,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        outlined: {
          background: colors.whiteSmoke,
          border: `1px solid ${colors.echoBlue}`,
          color: colors.almostBlack,
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.MuiInputLabel-root.Mui-focused': {
            color: colors.fallbackBlack,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: colors.white,
          },
          '&.MuiOutlinedInput-root.Mui-focused > fieldset': {
            borderColor: colors.paleBlack,
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: colors.silverGray,
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
};
