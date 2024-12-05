import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi) // Allows loading translations from external files
    .use(initReactI18next) // Connects i18next to React
    .init({
        fallbackLng: 'en', // Default language
        debug: true, // Enable logs in development
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
        },
    });

export default i18n;
