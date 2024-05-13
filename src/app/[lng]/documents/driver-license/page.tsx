import DLPage from "@/components/pages/Documents/driver-license/page";
import { metadata } from "../../layout";

interface DLProps {
  params: {
    lng: string;
  };
}

const DLComponent: React.FC<DLProps> = ({ params }) => {
  const { lng } = params;
  let title = "Driver License - AlterHelp";

  switch (lng) {
    case "de":
      title = "Führerschein - AlterHelp";
      break;
    case "en":
      title = "Driver License - AlterHelp";
      break;
    case "ru":
      title = "Водительское удостоверение - AlterHelp";
      break;
    case "ua":
      title = "Водійське посвідчення - AlterHelp";
      break;

    default:
      title = "Driver License - AlterHelp";
  }

  metadata.title = title;
  return <DLPage lng={lng} />;
};

export default DLComponent;
