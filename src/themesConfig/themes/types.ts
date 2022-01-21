import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      background: string;
      backgroundGradient: string;
      centralGradient: string;
      outline: string;
      backgroundSecondary: string;
      backgroundDeep: string;
      inactive: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      background: string;
      backgroundGradient: string;
      centralGradient: string;
      outline: string;
      backgroundSecondary: string;
      backgroundDeep: string;
      inactive: string;
    };
  }
}
