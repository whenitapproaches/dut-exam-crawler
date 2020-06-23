import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import vi from './vi'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages: {
    vi, en
  }
})