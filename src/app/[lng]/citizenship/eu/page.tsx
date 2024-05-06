"use client";
import { useTranslation } from "@/app/i18n/client";

interface EUPageProps {
  params: {
    lng: string;
  };
}
const EUPage = ({ params }: EUPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "citizenship", EUPage);

  return (
    <div>
      <h1>{t("citizenship.eu.title", { ns: "citizenship" })}</h1>
      <h3>{t("citizenship.eu.title1", { ns: "citizenship" })}</h3>
      <h4>{t("citizenship.eu.title2", { ns: "citizenship" })}</h4>
      <ul>
        <li>
          <strong>{t("citizenship.eu.section", { ns: "citizenship" })}:</strong>
          {t("citizenship.eu.section1", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section2", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section3", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section4", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section5", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section6", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section7", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section8", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section9", { ns: "citizenship" })}
        </li>
      </ul>
      <h3>{t("citizenship.eu.section10", { ns: "citizenship" })}</h3>
      <ul>
        <li>
          <strong>
            {t("citizenship.eu.section11", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section12", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section13", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section14", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section15", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section16", { ns: "citizenship" })}
        </li>
        <li>
          <strong>
            {t("citizenship.eu.section17", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section18", { ns: "citizenship" })}
        </li>
      </ul>
      <h4>{t("citizenship.eu.section19", { ns: "citizenship" })}</h4>
      <p>{t("citizenship.eu.section20", { ns: "citizenship" })}</p>
      <h3>{t("citizenship.eu.section21", { ns: "citizenship" })}</h3>
      <ul>
        <li>{t("citizenship.eu.section22", { ns: "citizenship" })}</li>
        <li>{t("citizenship.eu.section23", { ns: "citizenship" })}</li>
        <li>{t("citizenship.eu.section24", { ns: "citizenship" })}</li>
        <li>{t("citizenship.eu.section25", { ns: "citizenship" })}</li>
      </ul>
      <h4>{t("citizenship.eu.section26", { ns: "citizenship" })}</h4>
      <p>{t("citizenship.eu.section27", { ns: "citizenship" })}</p>
      <p>{t("citizenship.eu.section28", { ns: "citizenship" })}</p>
      <p>{t("citizenship.eu.section29", { ns: "citizenship" })}</p>
      <p>{t("citizenship.eu.section30", { ns: "citizenship" })}</p>
    </div>
  );
};

export default EUPage;
