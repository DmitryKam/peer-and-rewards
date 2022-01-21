import { createTheme } from '@mui/material/styles';

import { colors } from '../colors';
import { breakpoints } from './breakpoints';
import { commonSettings } from './common';
import { typography } from './typography';

export const lightTheme = createTheme(
  {
    typography,
    breakpoints,
    palette: {
      mode: 'light',
      primary: {
        main: colors.primaryRed, // highlighted elements
      },
      secondary: {
        main: colors.white, // sections background
        light: colors.white, // active elements background
        dark: colors.whiteSmoke, // searchBar background
      },
      divider: colors.platinumGray, // borders
      text: {
        primary: colors.almostBlack, // main or active text
        secondary: colors.darkGray, // inactive elements text
        disabled: colors.silverGray, // disabled elements text
      },
      action: {
        hover: colors.solitude,
      },
      success: {
        main: colors.green,
      },
      error: {
        main: colors.pinkRed,
      },
    },
    custom: {
      background: colors.whiteSmoke,
      backgroundGradient: `linear-gradient(225deg, ${colors.whiteSmoke} 0%, ${colors.white} 100%)`,
      centralGradient: `linear-gradient(225deg, #f7f7f8 0%, #fbfbfb 100%)`,
      outline: colors.silverGray,
      backgroundSecondary: colors.eastBay,
      backgroundDeep: colors.whiteSmoke,
      inactive: colors.echoBlue,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.whiteSmoke,
            backgroundImage: `linear-gradient(225deg, ${colors.whiteSmoke} 0%, ${colors.white} 100%)`,
            backgroundAttachment: 'fixed',
          },
          'div::-webkit-scrollbar,main::-webkit-scrollbar': {
            backgroundColor: colors.solitude,
          },
          'div::-webkit-scrollbar-thumb,main::-webkit-scrollbar-thumb': {
            backgroundColor: colors.echoBlue,
          },
          'div::-webkit-scrollbar-thumb:hover,main::-webkit-scrollbar-thumb:hover': {
            background: colors.darkGray,
          },
        },
      },

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
              color: colors.paleBlack,
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
  },
  commonSettings,
);
