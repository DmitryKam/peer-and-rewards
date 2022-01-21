import { jakartaLight, jakartaMedium, jakartaRegular } from '../fonts';
import { typography } from './typography';

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

        '@font-face': [jakartaRegular, jakartaLight, jakartaMedium],
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '40px',
        },
        input: {
          padding: '13px 16px',
          ...typography.body2,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: '-7px',
          paddingLeft: '2px',
        },
        outlined: {
          ...typography.body2,
        },
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
