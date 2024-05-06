"use client";
import { useTranslation } from "@/app/i18n/client";

interface RuPageProps {
  params: {
    lng: string;
  };
}
const RuPage = ({ params }: RuPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "citizenship", RuPage);

  return (
    <div>
      <h1>{t("citizenship.ru.title", { ns: "citizenship" })}</h1>
      <h3>{t("citizenship.ru.title1", { ns: "citizenship" })}</h3>
      <h4>{t("citizenship.ru.title2", { ns: "citizenship" })}</h4>
      <ul>
        <li>{t("citizenship.ru.section", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ru.section1", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ru.section2", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ru.section3", { ns: "citizenship" })}</li>
      </ul>
      <h3>{t("citizenship.ru.section4", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.ru.section5", { ns: "citizenship" })}</p>
      <p>{t("citizenship.ru.section6", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.ru.section7", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.ru.section8", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.ru.section9", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.ru.section10", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.ru.section11", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.ru.section12", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.ru.section13", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.ru.section14", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.ru.section15", { ns: "citizenship" })}</h3>
    </div>
  );
};

export default RuPage;
