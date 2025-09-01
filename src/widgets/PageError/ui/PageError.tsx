import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reload = () => {
    location.reload();
  };
  return (
    <div className={styles.pageError}>
      <h3>{t('Произоша чудовищная ошибка')}</h3>
      <Button onClick={reload}>{t('Перезагрузить страницу')}</Button>
    </div>
  );
};
