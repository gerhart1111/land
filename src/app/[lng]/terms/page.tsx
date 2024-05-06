"use client";
import { useTranslation } from "@/app/i18n/client";

interface TermsPagePageProps {
  params: {
    lng: string;
  };
}

const TermsPage = ({ params }: TermsPagePageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "terms", TermsPage);

  return (
    <div>
      <h1>{t("terms.title", { ns: "terms" })}</h1>
      <h3>{t("terms.title1", { ns: "terms" })}</h3>
      <h4>{t("terms.title2", { ns: "terms" })}</h4>
      <p>{t("terms.title3", { ns: "terms" })}</p>
      <h4>{t("terms.title4", { ns: "terms" })}</h4>
      <p>{t("terms.title5", { ns: "terms" })}</p>
      <h4>{t("terms.title6", { ns: "terms" })}</h4>
      <p>{t("terms.title7", { ns: "terms" })}</p>
      <h4>{t("terms.title8", { ns: "terms" })}</h4>
      <p>{t("terms.title9", { ns: "terms" })}</p>
      <h4>{t("terms.title10", { ns: "terms" })}</h4>
      <p>{t("terms.title11", { ns: "terms" })}</p>
      <h4>{t("terms.title12", { ns: "terms" })}</h4>
      <p>{t("terms.title13", { ns: "terms" })}</p>
      <p>{t("terms.title14", { ns: "terms" })}</p>
    </div>
  );
};

export default TermsPage;
