"use client";
import { useTranslation } from "@/app/i18n/client";

interface InformationPageProps {
  params: {
    lng: string;
  };
}

const InformationPage = ({ params }: InformationPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "information", InformationPage);

  return (
    <div>
      <h1>{t("information.main", { ns: "information" })}</h1>
      <h3>{t("information.main1", { ns: "information" })}</h3>
      <h4>{t("information.main2", { ns: "information" })}</h4>
      <h4>{t("information.main3", { ns: "information" })}</h4>
      <ul>
        <li>{t("information.mainul", { ns: "information" })}</li>
        <li>{t("information.mainul1", { ns: "information" })}</li>
        <li>{t("information.mainul2", { ns: "information" })}</li>
        <li>{t("information.mainul3", { ns: "information" })}</li>
        <li>{t("information.mainul4", { ns: "information" })}</li>
      </ul>
      <div>
        <h3>{t("information.maintext", { ns: "information" })}</h3>
        <h4>{t("information.maintext1", { ns: "information" })}</h4>
        <ul>
          <li>{t("information.maintext2", { ns: "information" })}</li>
          <li>{t("information.maintext3", { ns: "information" })}</li>
          <li>{t("information.maintext4", { ns: "information" })}</li>
        </ul>
      </div>
      <p>{t("information.maintext5", { ns: "information" })}</p>
      <div>
        <h3>{t("information.title", { ns: "information" })}</h3>
      </div>
      <ul>
        <li>
          <strong>{t("information.title1", { ns: "information" })}</strong>
          {t("information.title2", { ns: "information" })}
        </li>
        <li>
          <strong>{t("information.ulitem1", { ns: "information" })}</strong>
          {t("information.ulitem2", { ns: "information" })}
        </li>
        <li>
          <strong> {t("information.ulitem3", { ns: "information" })}</strong>
          {t("information.ulitem4", { ns: "information" })}
        </li>
        <li>
          <strong> {t("information.ulitem4", { ns: "information" })}</strong>
          {t("information.ulitem5", { ns: "information" })}
        </li>
        <li>
          <strong> {t("information.ulitem6", { ns: "information" })}</strong>
          {t("information.ulitem7", { ns: "information" })}
        </li>
        <li>
          <strong> {t("information.ulitem8", { ns: "information" })}</strong>
          {t("information.ulitem9", { ns: "information" })}
        </li>
      </ul>
      <div>
        <p>{t("information.ulitem10", { ns: "information" })}</p>
      </div>
    </div>
  );
};

export default InformationPage;
