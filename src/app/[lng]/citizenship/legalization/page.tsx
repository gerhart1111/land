import LegalizationPage from "@/components/pages/Citizenship/legalization/page";
import { metadata } from "../../layout";

interface LegalizationComponentProps {
  params: {
    lng: string;
  };
}
const LegalizationComponent = ({ params }: LegalizationComponentProps) => {
  const { lng } = params;
  let title = "Legalization of documents - AlterHelp";

  switch (lng) {
    case "de":
      title = "Legalisierung von Dokumenten - AlterHelp";
      break;
    case "en":
      title = "Legalization of documents - AlterHelp";
      break;
    case "ru":
      title = "Легализация документов - AlterHelp";
      break;
    case "ua":
      title = "Легалізація документів - AlterHelp";
      break;

    default:
      title = "Legalization of documents - AlterHelp";
  }

  metadata.title = title;
  return <LegalizationPage lng={lng} />;
};

export default LegalizationComponent;
