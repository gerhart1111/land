"use client";
import { useTranslation } from "@/app/i18n/client";
import Table from "@/components/FaqTable/faqTable";

interface FAQProps {
  params: {
    lng: string;
  };
}
export default function FAQPage({ params }: FAQProps) {
  const { lng } = params;
  const { t } = useTranslation(lng, "faq", FAQPage);

  return (
    <>
      <h1>{t("faq.title", { ns: "faq" })}</h1>
      <Table lng={lng} />
    </>
  );
}
