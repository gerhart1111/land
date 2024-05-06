"use client";
import { useTranslation } from "@/app/i18n/client";

interface LegalizationPageProps {
  params: {
    lng: string;
  };
}
const LegalizationPage = ({ params }: LegalizationPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "citizenship", LegalizationPage);

  return (
    <div>
      <h1>{t("citizenship.lega.title", { ns: "citizenship" })}</h1>
      <h3>{t("citizenship.lega.title1", { ns: "citizenship" })}</h3>
      <h4>{t("citizenship.lega.title2", { ns: "citizenship" })}</h4>
      <p>{t("citizenship.lega.section", { ns: "citizenship" })}</p>
      <h4>{t("citizenship.lega.section1", { ns: "citizenship" })}</h4>
      <ul>
        <li>
          <strong>
            {t("citizenship.lega.section2", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section3", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.lega.section4", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section5", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.lega.section6", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section7", { ns: "citizenship" })}
        </li>
      </ul>
      <h3>{t("citizenship.lega.section8", { ns: "citizenship" })}</h3>
      <p>{t("citizenship.lega.section9", { ns: "citizenship" })}</p>
      <ul>
        <li>{t("citizenship.lega.section10", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section11", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section12", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section13", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section14", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section15", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section16", { ns: "citizenship" })}</li>
      </ul>
      <p>{t("citizenship.lega.section17", { ns: "citizenship" })}</p>
      <p>{t("citizenship.lega.section18", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.lega.section25", { ns: "citizenship" })}</h3>
      <ul>
        <li>{t("citizenship.lega.section19", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section20", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section21", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section22", { ns: "citizenship" })}</li>
        <li>{t("citizenship.lega.section23", { ns: "citizenship" })}</li>
      </ul>
      <p>{t("citizenship.eu.section30", { ns: "citizenship" })}</p>
      <h4>{t("citizenship.lega.section24", { ns: "citizenship" })}</h4>
    </div>
  );
};

export default LegalizationPage;
