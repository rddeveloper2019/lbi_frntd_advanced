import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonAdv, ThemeButton } from '../../../shared/ui/Button/ButtonAdv';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ButtonAdv
      className={classNames(styles.langSwitcher, className)}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </ButtonAdv>
  );
};
