"use client";
import { useTranslation } from "@/app/i18n/client";

interface SearcHumanPagePageProps {
  params: {
    lng: string;
  };
}
const SearcHumanPage = ({ params }: SearcHumanPagePageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "search", SearcHumanPage);

  return (
    <div>
      <h1>{t("search.main.title", { ns: "search" })}</h1>
      <h3>{t("search.main.title1", { ns: "search" })}</h3>
      <h4>{t("search.main.title2", { ns: "search" })}</h4>
      <p>{t("search.main.title3", { ns: "search" })}</p>
      <p>{t("search.main.title4", { ns: "search" })}</p>
      <p>{t("search.main.title5", { ns: "search" })}</p>
      <p>{t("search.main.title6", { ns: "search" })}</p>
      <p>{t("search.main.title7", { ns: "search" })}</p>
      <p>{t("search.main.title8", { ns: "search" })}</p>
      <p>{t("search.main.title9", { ns: "search" })}</p>
      <p>{t("search.main.title10", { ns: "search" })}</p>
    </div>
  );
};

export default SearcHumanPage;
