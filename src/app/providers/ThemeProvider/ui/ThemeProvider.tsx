import { PropsWithChildren, useMemo, useState } from 'react';
import {
  Theme,
  THEME_LOCAL_STORAGE_KEY,
  ThemeContext,
} from '../lib/ThemeContext';

const storedTheme =
  (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(storedTheme);

  const defaultOptions = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultOptions}>
      {children}
    </ThemeContext.Provider>
  );
};
