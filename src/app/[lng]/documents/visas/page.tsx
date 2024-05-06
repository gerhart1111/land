"use client";
import { useTranslation } from "@/app/i18n/client";

interface VisasPageProps {
  params: {
    lng: string;
  };
}

const VisasPage = ({ params }: VisasPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "documents", VisasPage);

  return (
    <div>
      <h1>{t("documents.visas.title", { ns: "documents" })}</h1>
      <h3>{t("documents.visas.title1", { ns: "documents" })}</h3>
      <h4>{t("documents.visas.title2", { ns: "documents" })}</h4>
      <ul>
        <li>{t("documents.visas.ulitem", { ns: "documents" })}</li>
        <li>{t("documents.visas.ulitem1", { ns: "documents" })}</li>
        <li>{t("documents.visas.ulitem2", { ns: "documents" })}</li>
        <li>{t("documents.visas.ulitem3", { ns: "documents" })}</li>
        <li>{t("documents.visas.ulitem4", { ns: "documents" })}</li>
      </ul>
      <div>
        <strong>{t("documents.visas.text", { ns: "documents" })}</strong>
        <p>{t("documents.visas.text1", { ns: "documents" })}</p>
      </div>
      <strong>{t("documents.visas.text2", { ns: "documents" })}</strong>
      <p>{t("documents.visas.text3", { ns: "documents" })}</p>
      <strong>{t("documents.visas.text4", { ns: "documents" })}</strong>
      <p>{t("documents.visas.text5", { ns: "documents" })}</p>
      <strong>{t("documents.visas.text6", { ns: "documents" })}</strong>
      <p>{t("documents.visas.text7", { ns: "documents" })}</p>
      <p>{t("documents.visas.text8", { ns: "documents" })}</p>
      <h5>{t("documents.visas.text9", { ns: "documents" })}</h5>
    </div>
  );
};

export default VisasPage;
