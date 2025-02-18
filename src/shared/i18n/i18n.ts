import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// const resources = {
//   en: {
//     translation: {
//       'My name is Eva': 'My name is Eva',
//     },
//   },
//   ru: {
//     translation: {
//       'My name is Eva': 'Меня зовут Ева',
//     },
//   },
// };

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
