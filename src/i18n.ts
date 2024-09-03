import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import nextI18NextConfig from "../next-i18next.config";

i18n
  .use(HttpApi) // Use the HTTP backend
  // .use(LanguageDetector)
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    debug: process.env.NODE_ENV === "development",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to your locales
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false, // Disable suspense
    },
  });

export default i18n;
