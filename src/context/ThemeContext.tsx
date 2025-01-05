import React, { createContext, useContext } from 'react';
import { COLORS } from '../constants';

const ThemeContext = createContext(COLORS);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={COLORS}>
      {children}
    </ThemeContext.Provider>
  );
}; 