import VisasPage from "@/components/pages/Documents/visas/page";
import { metadata } from "../../layout";

interface VisasPageProps {
  params: {
    lng: string;
  };
}

const VisasComponent = ({ params }: VisasPageProps) => {
  const { lng } = params;
  let title = "Visas - AlterHelp";

  switch (lng) {
    case "de":
      title = "Visas - AlterHelp";
      break;
    case "en":
      title = "Visas - AlterHelp";
      break;
    case "ru":
      title = "Визы - AlterHelp";
      break;
    case "ua":
      title = "Візи - AlterHelp";
      break;

    default:
      title = "Visas - AlterHelp";
  }

  metadata.title = title;
  return <VisasPage lng={lng} />;
};

export default VisasComponent;
