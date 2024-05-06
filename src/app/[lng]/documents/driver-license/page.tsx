"use client";
import { useTranslation } from "@/app/i18n/client";

interface DLProps {
  params: {
    lng: string;
  };
}

const DLPage: React.FC<DLProps> = ({ params }) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "documents", DLPage);
  return (
    <div>
      <h1>{t("documents.dl.title", { ns: "documents" })}</h1>
      <h3>{t("documents.dl.title1", { ns: "documents" })}</h3>
      <h4>{t("documents.dl.title2", { ns: "documents" })}</h4>
      <p>{t("documents.dl.title3", { ns: "documents" })}</p>
      <ul>
        <li>{t("documents.dl.ulitem", { ns: "documents" })}</li>
        <li>{t("documents.dl.ulitem1", { ns: "documents" })}</li>
        <li>{t("documents.dl.ulitem2", { ns: "documents" })}</li>
        <li>{t("documents.dl.ulitem3", { ns: "documents" })}</li>
        <li>{t("documents.dl.ulitem4", { ns: "documents" })}</li>
        <li>{t("documents.dl.ulitem5", { ns: "documents" })}</li>
      </ul>
      <div>
        <h4>{t("documents.dl.text", { ns: "documents" })}</h4>
        <h4>{t("documents.dl.text1", { ns: "documents" })}</h4>
      </div>
      <strong>{t("documents.dl.text2", { ns: "documents" })}</strong>
      <ul>
        <li>{t("documents.dl.text3", { ns: "documents" })}</li>
        <li>{t("documents.dl.text4", { ns: "documents" })}</li>
        <li>{t("documents.dl.text5", { ns: "documents" })}</li>
        <li>{t("documents.dl.text6", { ns: "documents" })}</li>
      </ul>
      <p>{t("documents.dl.text7", { ns: "documents" })}</p>
    </div>
  );
};

export default DLPage;
