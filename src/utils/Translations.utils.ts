/**
 * Translations
 * @utils
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { storagesKey } from "./Constants.utils";
import { I18nManager } from "react-native";

/* Setting the default language to English, Change it with current default language */
export const DEFAULT_LANGUAGE = "en";

/* Initializing the i18n library with the default language and the resources. */
i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  resources: {
    en: require("../locales/en.json"),
  },
  compatibilityJSON: "v3",
});

/**
 * If the locale is not set, set the default language, otherwise set the language to the locale.
 * @returns a promise.
 */
export async function checkTranslation() {
  /* Getting the locale from the AsyncStorage. */
  const locale = await AsyncStorage.getItem(storagesKey.locale);
  /* If the locale is not set, set the default language, otherwise set the language to the locale. */
  if (!locale) {
    setDefaultLanguage();
    return;
  }
  /* Setting the language to the given language and changes the direction of the app to the given
  language. */
  setLanguage(locale);
}

/**
 * "If the language is English, set the direction to left-to-right, otherwise set it to right-to-left."
 */
async function setDefaultLanguage() {
  /* Setting the default language to the AsyncStorage. */
  await AsyncStorage.setItem(storagesKey.locale, DEFAULT_LANGUAGE);
  /* Setting the direction of the app to the given language. */
  I18nManager.forceRTL(DEFAULT_LANGUAGE == "en" ? false : true);
}

/**
 * This function sets the language to the given language and changes the direction of the app to the
 * given language.
 * @param {string} language - The language you want to set.
 */
async function setLanguage(language: string) {
  /* Setting the language to the given language. */
  await AsyncStorage.setItem(storagesKey.locale, language);
  /* Changing the language of the app. */
  i18n.changeLanguage(language);
  /* Setting the direction of the app to the given language. */
  I18nManager.forceRTL(language == "en" ? false : true);
}

/**
 * "If the locale is ar, return true, otherwise return false."
 * @returns A function that returns a promise.
 */
export async function isRTL() {
  /* Getting the locale from the AsyncStorage. */
  const locale = await AsyncStorage.getItem(storagesKey.locale);
  /* Checking if the locale is ar, if it is, it returns true, otherwise it returns false. */
  return locale == "ar" ? true : false;
}
