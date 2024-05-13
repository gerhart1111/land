import HelpPage from "@/components/pages/Help/page";
import { metadata } from "../layout";
interface HelpPageProps {
  params: {
    lng: string;
  };
}

const HelpComponent = ({ params }: HelpPageProps) => {
  const { lng } = params;
  let title = "Help Page - AlterHelp";

  switch (lng) {
    case "de":
      title = "Hilfe-Seite - AlterHelp";
      break;
    case "en":
      title = "Help Page - AlterHelp";
      break;
    case "ru":
      title = "Пользовательская помощь - AlterHelp";
      break;
    case "ua":
      title = "Допомога користувачу - AlterHelp";
      break;

    default:
      title = "Help Page - AlterHelp";
  }

  metadata.title = title;
  return <HelpPage lng={lng} />;
};

export default HelpComponent;
