import { metadata } from "@/app/[lng]/layout";
import InformationPage from "@/components/pages/Help/personal/information/page";

interface InformationPageProps {
  params: {
    lng: string;
  };
}

const InformationComponent = ({ params }: InformationPageProps) => {
  const { lng } = params;
  let title = "Information Page - AlterHelp";

  switch (lng) {
    case "de":
      title = "Informationsseite - AlterHelp";
      break;
    case "en":
      title = "Information Page - AlterHelp";
      break;
    case "ru":
      title = "Дополнительная информация - AlterHelp";
      break;
    case "ua":
      title = "Додаткова інформація - AlterHelp";
      break;

    default:
      title = "Information Page - AlterHelp";
  }

  metadata.title = title;
  return <InformationPage lng={lng} />;
};

export default InformationComponent;
