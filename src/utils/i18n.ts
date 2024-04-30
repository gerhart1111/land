import i18n from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LngDetector from "i18next-browser-languagedetector";
import intervalPlural from "i18next-intervalplural-postprocessor";
import { initReactI18next } from "react-i18next";

i18n
  .use(LngDetector)
  .use(intervalPlural)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("translation")
      ) {
        if (JSON.parse(localStorage.getItem("translation") || "{}")[language]) {
          callback(
            null,
            JSON.parse(localStorage.getItem("translation") || "{}")[language][
              namespace
            ]
          );
        } else {
          fetch(`${process.env.NEXT_PUBLIC_SSO_API}/language/${language}`)
            .then((response) => response.json())
            .then((resource) => {
              //Insert the new language
              let existsLangs = JSON.parse(
                localStorage.getItem("translation") || "{}"
              );
              existsLangs[language] = resource[language];
              localStorage.setItem("translation", JSON.stringify(existsLangs));
              callback(null, resource[language][namespace]);
            })
            .catch((error) => {
              callback(error, "error");
            });
        }
      }
    })
  )
  .use(initReactI18next);
// .init(options as any);

export default i18n;
