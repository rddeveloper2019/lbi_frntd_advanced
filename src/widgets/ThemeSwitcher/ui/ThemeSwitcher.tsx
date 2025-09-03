import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ButtonAdv, ThemeButton } from 'shared/ui/Button/ButtonAdv';
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
    <ButtonAdv
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeLight /> : <ThemeDark />}
    </ButtonAdv>
  );
};
