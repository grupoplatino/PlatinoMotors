import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import {TRANSLATIONS_EN}  from "./i18n/en/global";
import {TRANSLATIONS_ES}  from "./i18n/es/global";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        en: {
            common: TRANSLATIONS_EN
        },
        es: {
            common: TRANSLATIONS_ES
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);

