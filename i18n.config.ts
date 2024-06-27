import en from './locales/en.json'
import ru from './locales/ru.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    messages: {
        en,
        ru,
    }
}))