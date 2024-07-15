import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'ua',
    fallbackLng: 'ua',
    backend: {
      loadPath: 'https://podilsk-guest-house.website//locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18next;
