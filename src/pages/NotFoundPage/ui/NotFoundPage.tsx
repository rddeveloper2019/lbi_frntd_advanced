import { useTranslation } from 'react-i18next';
import styles from './NotfoundPage.module.scss';
interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={styles.notFoundPage}>{t('Страница не найдена')}</div>;
};
