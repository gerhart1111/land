import { metadata } from "@/app/[lng]/layout";
import Table from "@/components/FaqTable/faqTable";

interface FAQProps {
  params: {
    lng: string;
  };
}
export default function FAQPage({ params }: FAQProps) {
  const { lng } = params;

  metadata.title = "FAQ - AlterHelp";
  return (
    <>
      <Table lng={lng} />
    </>
  );
}
