import { useTranslation } from 'react-i18next';
import pic from 'shared/assets/pict.jpg';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <img src={pic} width={500} />
    </div>
  );
};

export default MainPage;
