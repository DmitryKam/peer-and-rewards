const sm = '@media (max-width:600px)';
const md = '@media (max-width:960px)';
const lg = '@media (max-width:1280px)';

export const typography = {
  fontFamily: "'PlusJakartaSans', 'Helvetica', 'Arial', 'sans-serif'",
  h1: {
    letterSpacing: -1.5,
    fontSize: 96,
    [lg]: {
      fontSize: 86,
    },
    [md]: {
      fontSize: 75,
    },
    [sm]: {
      fontSize: 56,
    },
  },
  h2: {
    letterSpacing: -0.5,
    fontSize: 64,
    [lg]: {
      fontSize: 53,
    },
    [md]: {
      fontSize: 46,
    },
    [sm]: {
      fontSize: 38,
    },
  },
  h3: {
    fontSize: 48,
    letterSpacing: 0,
    [lg]: {
      fontSize: 44,
    },
    [md]: {
      fontSize: 41,
    },
    [sm]: {
      fontSize: 32,
    },
  },
  h4: {
    fontSize: 32,
    letterSpacing: 0.25,
    [md]: {
      fontSize: 29,
    },
    [sm]: {
      fontSize: 25,
    },
  },
  h5: {
    fontSize: 24,
    letterSpacing: 0,
    [md]: {
      fontSize: 22,
    },
    [sm]: {
      fontSize: 20,
    },
  },
  h6: {
    fontSize: 20,
    letterSpacing: 0.15,
    [md]: {
      fontSize: 20,
    },
    [sm]: {
      fontSize: 18,
    },
  },
  subtitle1: {
    fontSize: 16,
    letterSpacing: 0.15,
    [md]: {
      fontSize: 14,
    },
  },
  subtitle2: {
    fontSize: 14,
    letterSpacing: 0.1,
    [md]: {
      fontSize: 12,
    },
  },
  body1: {
    fontSize: 16,
    letterSpacing: 0.5,
    [md]: {
      fontSize: 14,
    },
  },
  body2: {
    fontSize: 14,
    letterSpacing: 0.25,
    [md]: {
      fontSize: 12,
    },
  },
  button: {
    fontSize: 14,
    letterSpacing: 1.25,
    [md]: {
      fontSize: 12,
    },
  },
  caption: {
    fontSize: 12,
    letterSpacing: 0.4,
    [md]: {
      fontSize: 10,
    },
  },
  overline: {
    fontSize: 10,
    letterSpacing: 1.5,
    [md]: {
      fontSize: 8,
    },
  },
};
