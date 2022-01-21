const mobile = '@media (max-width:600px)';
const tablet = '@media (max-width:960px)';
const laptop = '@media (max-width:1280px)';

export const typography = {
  fontFamily: "'PlusJakartaSans', 'Helvetica', 'Arial', 'sans-serif'",
  h1: {
    letterSpacing: -1.5,
    fontSize: 96,
    [laptop]: {
      fontSize: 86,
    },
    [tablet]: {
      fontSize: 75,
    },
    [mobile]: {
      fontSize: 56,
    },
  },
  h2: {
    letterSpacing: -0.5,
    fontSize: 64,
    [laptop]: {
      fontSize: 53,
    },
    [tablet]: {
      fontSize: 46,
    },
    [mobile]: {
      fontSize: 38,
    },
  },
  h3: {
    fontSize: 48,
    letterSpacing: 0,
    [laptop]: {
      fontSize: 44,
    },
    [tablet]: {
      fontSize: 41,
    },
    [mobile]: {
      fontSize: 32,
    },
  },
  h4: {
    fontSize: 32,
    letterSpacing: 0.25,
    [tablet]: {
      fontSize: 29,
    },
    [mobile]: {
      fontSize: 25,
    },
  },
  h5: {
    fontSize: 24,
    letterSpacing: 0,
    [tablet]: {
      fontSize: 22,
    },
    [mobile]: {
      fontSize: 20,
    },
  },
  h6: {
    fontSize: 20,
    letterSpacing: 0.15,
    [tablet]: {
      fontSize: 20,
    },
    [mobile]: {
      fontSize: 18,
    },
  },
  subtitle1: {
    fontSize: 16,
    letterSpacing: 0.15,
    [tablet]: {
      fontSize: 14,
    },
  },
  subtitle2: {
    fontSize: 14,
    letterSpacing: 0.1,
    [tablet]: {
      fontSize: 12,
    },
  },
  body1: {
    fontSize: 16,
    letterSpacing: 0.5,
    [tablet]: {
      fontSize: 14,
    },
  },
  body2: {
    fontSize: 14,
    letterSpacing: 0.25,
    [tablet]: {
      fontSize: 12,
    },
  },
  button: {
    fontSize: 14,
    letterSpacing: 1.25,
    [tablet]: {
      fontSize: 12,
    },
  },
  caption: {
    fontSize: 12,
    letterSpacing: 0.4,
    [tablet]: {
      fontSize: 10,
    },
  },
  overline: {
    fontSize: 10,
    letterSpacing: 1.5,
    [tablet]: {
      fontSize: 8,
    },
  },
};
