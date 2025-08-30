import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

export const THEME_LOCAL_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
