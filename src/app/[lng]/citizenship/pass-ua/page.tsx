import UaPage from "@/components/pages/Citizenship/pass-ua/page";
import { metadata } from "../../layout";

interface UaPageProps {
  params: {
    lng: string;
  };
}
const UaComponent = ({ params }: UaPageProps) => {
  const { lng } = params;
  let title = "Citizenship Ukraine - AlterHelp";

  switch (lng) {
    case "de":
      title = "Staatsbürgerschaft Ukraine - AlterHelp";
      break;
    case "en":
      title = "Citizenship Ukraine - AlterHelp";
      break;
    case "ru":
      title = "Гражданство Украины- AlterHelp";
      break;
    case "ua":
      title = "Громадянство України- AlterHelp";
      break;

    default:
      title = "Citizenship Ukraine - AlterHelp";
  }

  metadata.title = title;
  return <UaPage lng={lng} />;
};

export default UaComponent;
