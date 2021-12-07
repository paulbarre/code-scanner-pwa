import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const STORAGE_KEY = 'lang';
const DEFAULT_LOCALE = 'en';

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const browserLanguage = navigator.language.match(/[a-z]+/)?.[0];
console.log(navigator.language, browserLanguage);

const currentLocale = localStorage.getItem(STORAGE_KEY)
  || process.env.VUE_APP_I18N_LOCALE
  || browserLanguage;

export function saveLocale(locale) {
  localStorage.setItem(STORAGE_KEY, locale);
}

export default new VueI18n({
  locale: currentLocale || DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || DEFAULT_LOCALE,
  messages: loadLocaleMessages(),
});
