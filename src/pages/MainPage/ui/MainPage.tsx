import { useTranslation } from 'react-i18next';
import pic from 'shared/assets/pict.jpg';
import { PageError } from 'widgets/PageError';
const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <img src={pic} width={500} />
      <PageError />
    </div>
  );
};

export default MainPage;
