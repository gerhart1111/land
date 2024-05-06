"use client";
import { useTranslation } from "@/app/i18n/client";

interface UaPageProps {
  params: {
    lng: string;
  };
}
const UaPage = ({ params }: UaPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "citizenship", UaPage);

  return (
    <div>
      <h1>{t("citizenship.ukr.title", { ns: "citizenship" })}</h1>
      <h3>{t("citizenship.ukr.title1", { ns: "citizenship" })}</h3>
      <h4>{t("citizenship.ukr.title2", { ns: "citizenship" })}</h4>
      <ul>
        <li>
          <strong>{t("citizenship.ukr.section", { ns: "citizenship" })}</strong>
          {t("citizenship.ukr.section1", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.ukr.section2", { ns: "citizenship" })}
          </strong>
          {t("citizenship.ukr.section3", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.ukr.section4", { ns: "citizenship" })}
          </strong>
          {t("citizenship.ukr.section5", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.ukr.section6", { ns: "citizenship" })}
          </strong>
        </li>
      </ul>
      <h3>{t("citizenship.ukr.section7", { ns: "citizenship" })}</h3>
      <ul>
        <li>{t("citizenship.ukr.section8", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section9", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section10", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section11", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section12", { ns: "citizenship" })}</li>
      </ul>
      <h4>{t("citizenship.ukr.section13", { ns: "citizenship" })}</h4>
      <ul>
        <li>{t("citizenship.ukr.section14", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section15", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section16", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section17", { ns: "citizenship" })}</li>
        <li>{t("citizenship.ukr.section18", { ns: "citizenship" })}</li>
      </ul>
      <h4>{t("citizenship.ukr.section19", { ns: "citizenship" })}</h4>
      <ul>
        <li>{t("citizenship.ukr.section20", { ns: "citizenship" })}</li>
      </ul>
      <p>{t("citizenship.ukr.section21", { ns: "citizenship" })}</p>
      <p>{t("citizenship.ukr.section22", { ns: "citizenship" })}</p>
      <p>{t("citizenship.eu.section30", { ns: "citizenship" })}</p>
    </div>
  );
};

export default UaPage;
