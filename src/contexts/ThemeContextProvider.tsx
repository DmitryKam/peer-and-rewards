import { createContext, useState, useEffect, useContext, ChangeEvent } from 'react';

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material';

import { getThemeByName } from '../themesConfig';

const initialTheme = localStorage?.getItem('theme') || 'dark';
const ThemeContext = createContext({
  isDarkMode: initialTheme === 'dark',
  toggleTheme: (event: ChangeEvent<HTMLInputElement>) => {},
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [themeType, setThemeType] = useState(initialTheme);
  const isDarkMode = themeType === 'dark';
  const theme = getThemeByName(themeType);

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const nextThemeType = isDarkMode ? 'light' : 'dark';
    setThemeType(nextThemeType);
  };

  useEffect(() => {
    localStorage.setItem('theme', themeType);
  }, [themeType]);

  const value = { isDarkMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
