"use client";
import { useTranslation } from "@/app/i18n/client";

interface PrivacyPageProps {
  params: {
    lng: string;
  };
}

const PrivacyPage = ({ params }: PrivacyPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "privacy", PrivacyPage);

  return (
    <div>
      <h1>{t("privacy.title", { ns: "privacy" })}</h1>
      <h3>{t("privacy.title1", { ns: "privacy" })}</h3>
      <h4>{t("privacy.title2", { ns: "privacy" })}</h4>
      <p>{t("privacy.title3", { ns: "privacy" })}</p>
      <h4>{t("privacy.title4", { ns: "privacy" })}</h4>
      <p>{t("privacy.title5", { ns: "privacy" })}</p>
      <h4>{t("privacy.title6", { ns: "privacy" })}</h4>
      <p>{t("privacy.title7", { ns: "privacy" })}</p>
      <h4>{t("privacy.title8", { ns: "privacy" })}</h4>
      <p>{t("privacy.title9", { ns: "privacy" })}</p>
      <h4>{t("privacy.title10", { ns: "privacy" })}</h4>
      <p>{t("privacy.title11", { ns: "privacy" })}</p>
      <h4>{t("privacy.title12", { ns: "privacy" })}</h4>
      <p>{t("privacy.title13", { ns: "privacy" })}</p>
      <p>{t("privacy.title14", { ns: "privacy" })}</p>
    </div>
  );
};

export default PrivacyPage;
