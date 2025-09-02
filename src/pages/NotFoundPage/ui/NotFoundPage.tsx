import { useTranslation } from 'react-i18next';
import styles from './NotfoundPage.module.scss';
import classNames from 'classnames';
interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.notFoundPage, className)}>
      {t('Страница не найдена')}
    </div>
  );
};
