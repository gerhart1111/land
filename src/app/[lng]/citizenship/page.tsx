import CitizenshipPage from "@/components/pages/Citizenship/page";
import { metadata } from "../layout";

interface CitizenshipComponentProps {
  params: {
    lng: string;
  };
}

const CitizenshipComponent = ({ params }: CitizenshipComponentProps) => {
  const { lng } = params;
  let title = "Citizenship - AlterHelp";

  switch (lng) {
    case "de":
      title = "Staatsbürgerschaft - AlterHelp";
      break;
    case "en":
      title = "Citizenship - AlterHelp";
      break;
    case "ru":
      title = "Гражданство - AlterHelp";
      break;
    case "ua":
      title = "Громадянство - AlterHelp";
      break;

    default:
      title = "Citizenship - AlterHelp";
  }

  metadata.title = title;
  return <CitizenshipPage lng={lng} />;
};

export default CitizenshipComponent;
