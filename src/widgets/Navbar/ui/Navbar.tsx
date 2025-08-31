import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <ThemeSwitcher />
        <AppLink to={'/'}>main page</AppLink>
        <AppLink to={'/about'}>about page</AppLink>
      </div>
    </div>
  );
};
