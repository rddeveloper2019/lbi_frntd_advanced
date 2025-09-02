import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { ThemeLight } from 'shared/assets/icons/theme-light';
import { ThemeDark } from 'shared/assets/icons/theme-dark';
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeLight /> : <ThemeDark />}
    </Button>
  );
};
