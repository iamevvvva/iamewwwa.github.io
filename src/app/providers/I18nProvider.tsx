'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { ReactNode, useEffect, useState } from 'react';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(i18n.isInitialized);
    if (!i18n.isInitialized) {
      i18n.on('initialized', () => setReady(true));
    }
  }, []);
  if (!ready) return null;
  return <>{children}</>;
}
