export const fallbackLng = "en";
export const languagesPrefixes = ["de", "en", "ru", "ua"];
export const languages = [fallbackLng, ...languagesPrefixes];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
