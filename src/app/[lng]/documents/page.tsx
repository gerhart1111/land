"use client";
import { useTranslation } from "@/app/i18n/client";

interface DocumentsPageProps {
  params: {
    lng: string;
  };
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ params }) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "documents", DocumentsPage);
  return (
    <div>
      <h1>{t("documents.title", { ns: "documents" })}</h1>
      <h3>{t("documents.title1", { ns: "documents" })}</h3>
      <h4>{t("documents.title2", { ns: "documents" })}</h4>
      <p>{t("documents.title3", { ns: "documents" })}</p>
      <h4>{t("documents.title4", { ns: "documents" })}</h4>
    </div>
  );
};

export default DocumentsPage;
