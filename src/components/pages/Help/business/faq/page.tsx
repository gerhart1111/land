import Table from "@/components/FaqTable/faqTable";

interface FAQProps {
  params: {
    lng: string;
  };
}
export default function FAQPage({ params }: FAQProps) {
  const { lng } = params;

  return (
    <>
      <Table lng={lng} />
    </>
  );
}
