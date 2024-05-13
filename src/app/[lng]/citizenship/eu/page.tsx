import EUPage from "@/components/pages/Citizenship/eu/page";
import { metadata } from "../../layout";

interface EUPageProps {
  params: {
    lng: string;
  };
}
const EUPageComponent = ({ params }: EUPageProps) => {
  const { lng } = params;
  let title = "Citizenship EU - AlterHelp";

  switch (lng) {
    case "de":
      title = "Unionsbürgerschaft - AlterHelp";
      break;
    case "en":
      title = "Citizenship EU - AlterHelp";
      break;
    case "ru":
      title = "Гражданство Европа- AlterHelp";
      break;
    case "ua":
      title = "Громадянство Європа- AlterHelp";
      break;

    default:
      title = "Citizenship EU - AlterHelp";
  }

  metadata.title = title;
  return <EUPage lng={lng} />;
};

export default EUPageComponent;
