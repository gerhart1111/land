const languageToCountryCode: { [key: string]: string } = {
  de: "de", // German to Germany
  en: "gb", // English to United Kingdom
  ru: "ru", // Russian to Russia
  ua: "ua", // Ukrainian to Ukraine
};

export const mapLanguageToCountryCode = (language: string) => {
  return languageToCountryCode[language] || "default";
};
