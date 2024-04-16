import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import usTranslation from '@locales/en_US.json'
import koTranslation from '@locales/ko_KR.json'

const resources = {
  en_US: {
    translation: usTranslation,
  },
  ko_KR: {
    translation: koTranslation,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'ko_KR',
  fallbackLng: 'en_US',
  debug: true,
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: true,
  returnNull: true,
})

export default i18next
