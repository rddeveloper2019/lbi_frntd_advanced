import { useTranslation } from 'react-i18next';
import { ButtonAdv } from 'shared/ui/Button/ButtonAdv';
import styles from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reload = () => {
    location.reload();
  };
  return (
    <div className={styles.pageError}>
      <h3>{t('Произоша чудовищная ошибка')}</h3>
      <ButtonAdv onClick={reload}>{t('Перезагрузить страницу')}</ButtonAdv>
    </div>
  );
};
