import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink to={'/'}> {t('На главную')}</AppLink>
        <AppLink to={'/about'}> {t('О нас')}</AppLink>
      </div>
    </div>
  );
};
