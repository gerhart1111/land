import SearcHumanPage from "@/components/pages/Search-Human/page";
import { metadata } from "../layout";

interface SearcHumanPagePageProps {
  params: {
    lng: string;
  };
}

const SearcHumanComponent = ({ params }: SearcHumanPagePageProps) => {
  const { lng } = params;
  let title = "Search Person - AlterHelp";

  switch (lng) {
    case "de":
      title = "Person suchen - AlterHelp";
      break;
    case "en":
      title = "Search Person - AlterHelp";
      break;
    case "ru":
      title = "Поиск человека - AlterHelp";
      break;
    case "ua":
      title = "Пошук людини - AlterHelp";
      break;

    default:
      title = "Search Person - AlterHelp";
  }

  metadata.title = title;
  return <SearcHumanPage lng={lng} />;
};

export default SearcHumanComponent;
