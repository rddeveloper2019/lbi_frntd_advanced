import { useContext } from 'react';
import { Theme, THEME_LOCAL_STORAGE_KEY, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
