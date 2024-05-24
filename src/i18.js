import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'ua', 
    backend: {
      loadPath: '/hotelanna/locales/{{lng}}/{{ns}}.json',
    },
    debug: true,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
