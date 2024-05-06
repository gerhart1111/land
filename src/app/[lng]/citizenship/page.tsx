"use client";

import { useTranslation } from "@/app/i18n/client";
import React from "react";

interface CitizenshipPageProps {
  params: {
    lng: string;
  };
}

const CitizenshipPage: React.FC<CitizenshipPageProps> = ({ params }) => {
  const { lng } = params;

  const { t } = useTranslation(lng, "citizenship", CitizenshipPage);

  return (
    <div>
      <h1>{t("citizenship.title", { ns: "citizenship" })}</h1>
      <h2>{t("citizenship.title1", { ns: "citizenship" })}</h2>
      <h3>{t("citizenship.title2", { ns: "citizenship" })}</h3>
      <h4>{t("citizenship.section", { ns: "citizenship" })}</h4>
      <ul>
        <li>
          <strong>{t("citizenship.section1", { ns: "citizenship" })}:</strong>
          {t("citizenship.section2", { ns: "citizenship" })}
        </li>
        <li>
          <strong>{t("citizenship.section3", { ns: "citizenship" })}:</strong>
          {t("citizenship.section4", { ns: "citizenship" })}
        </li>
        <li>
          <strong>{t("citizenship.section5", { ns: "citizenship" })}:</strong>
          {t("citizenship.section6", { ns: "citizenship" })}
        </li>
        <li>
          <strong> {t("citizenship.section7", { ns: "citizenship" })}:</strong>
          {t("citizenship.section8", { ns: "citizenship" })}
        </li>
        <li>
          <strong>{t("citizenship.section9", { ns: "citizenship" })}:</strong>
          {t("citizenship.section10", { ns: "citizenship" })}
        </li>
        <li>
          <strong>{t("citizenship.section11", { ns: "citizenship" })}:</strong>
          {t("citizenship.section12", { ns: "citizenship" })}
        </li>
      </ul>
      <h2>{t("citizenship.section13", { ns: "citizenship" })}</h2>
      <ul>
        <li>{t("citizenship.section14", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section15", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section16", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section17", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section18", { ns: "citizenship" })}</li>
      </ul>
      <h2>{t("citizenship.section19", { ns: "citizenship" })}</h2>
      <p>{t("citizenship.section20", { ns: "citizenship" })}</p>
      <ul>
        <li>{t("citizenship.section21", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section22", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section23", { ns: "citizenship" })}</li>
        <li>{t("citizenship.section24", { ns: "citizenship" })}</li>
      </ul>
      <h2>{t("citizenship.section25", { ns: "citizenship" })}</h2>
      <p>{t("citizenship.section26", { ns: "citizenship" })}</p>
      <p>{t("citizenship.section27", { ns: "citizenship" })}</p>
    </div>
  );
};

export default CitizenshipPage;
