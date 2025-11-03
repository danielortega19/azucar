import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

// 🧠 Load saved language or default to English
const savedLang = localStorage.getItem("azucar-lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

// 🌍 Dynamically update <html lang="">
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  localStorage.setItem("azucar-lang", lng);
});

// ✅ Set initial <html lang=""> on load
document.documentElement.setAttribute("lang", savedLang);

export default i18n;
