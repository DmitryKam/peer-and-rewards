import { createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

import { breakpoints } from './breakpoints';
import { colors } from './colors';

export const commonSettings = {
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          fontFamily: 'monospace', // to show where Typography is not used
        },

        'div,main': {
          scrollbarWidth: 'thin',
        },
        'div::-webkit-scrollbar,main::-webkit-scrollbar': {
          width: 4,
          height: 4,
          borderRadius: '0 0 2px 2px',
        },
        'div::-webkit-scrollbar-thumb,main::-webkit-scrollbar-thumb': {
          borderRadius: 5,
        },

        'input[type="number"]::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
        },
        'input[type="number"]': {
          appearance: 'textfield',
        },

        'input[type="password"]::-ms-reveal': {
          display: 'none',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '40px',
        },
        input: {
          padding: '13px 16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: '-7px',
          paddingLeft: '2px',
        },
        outlined: {},
        shrink: {
          marginTop: '-2px',
          paddingLeft: '2px',
          transform: 'translate(14px, -6px) scale(0.85) !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '13px 16px',
        },
      },
    },
  },
};

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
