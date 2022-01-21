import { createTheme } from '@mui/material/styles';

import { colors } from '../colors';
import { breakpoints } from './breakpoints';
import { commonSettings } from './common';
import { typography } from './typography';

export const darkTheme = createTheme(
  {
    typography,
    breakpoints,
    palette: {
      mode: 'dark',
      primary: {
        main: colors.primaryRed, // highlighted elements
      },
      secondary: {
        main: colors.almostBlack, // sections background
        light: colors.darkestGray, // active elements background
        dark: colors.lightBlack, // searchBar background
      },
      divider: colors.darkestGray, // borders
      text: {
        primary: colors.whiteSmoke, // main or active text
        secondary: colors.mistGray, // inactive elements text
        disabled: colors.darkerGray, // disabled elements text
      },
      action: {
        hover: colors.paynesGray,
      },
      success: {
        main: colors.green,
      },
      error: {
        main: colors.pinkRed,
      },
    },
    custom: {
      background: colors.fallbackBlack,
      backgroundGradient: `linear-gradient(225deg, ${colors.almostBlack} 0%, ${colors.black} 100%)`,
      centralGradient: `linear-gradient(225deg, #111216 0%, #0a0a0c 100%)`,
      outline: colors.shuttleGray,
      backgroundSecondary: colors.mistGray,
      backgroundDeep: colors.paleBlack,
      inactive: colors.mistGray,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.fallbackBlack,
            backgroundImage: `linear-gradient(225deg, ${colors.almostBlack} 0%, ${colors.black} 100%)`,
            backgroundAttachment: 'fixed',
          },
          'div::-webkit-scrollbar,main::-webkit-scrollbar': {
            backgroundColor: colors.paynesGray,
          },
          'div::-webkit-scrollbar-thumb,main::-webkit-scrollbar-thumb': {
            backgroundColor: colors.mistGray,
          },
          'div::-webkit-scrollbar-thumb:hover,main::-webkit-scrollbar-thumb:hover': {
            background: colors.silverGray,
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background: colors.paleBlack,
          },

          notchedOutline: {
            borderColor: colors.shuttleGray,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          outlinedSecondary: {
            background: colors.paleBlack,
            border: `1px solid ${colors.shuttleGray}`,
            color: colors.mistGray,
            '&:hover': {
              background: colors.lightBlack,
              border: `1px solid ${colors.shuttleGray}`,
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          outlined: {
            background: colors.paleBlack,
            border: `1px solid ${colors.shuttleGray}`,
            color: colors.whiteSmoke,
          },
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            '&.MuiInputLabel-root.Mui-focused': {
              color: colors.whiteSmoke,
            },
          },
        },
      },

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
  },
  commonSettings,
);
