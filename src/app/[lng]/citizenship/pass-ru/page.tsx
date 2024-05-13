import RuPage from "@/components/pages/Citizenship/pass-ru/page";
import { metadata } from "../../layout";

interface RuPageProps {
  params: {
    lng: string;
  };
}
const RuComponent = ({ params }: RuPageProps) => {
  const { lng } = params;
  let title = "Citizenship Russia - AlterHelp";

  switch (lng) {
    case "de":
      title = "Staatsbürgerschaft Russland - AlterHelp";
      break;
    case "en":
      title = "Citizenship Russia - AlterHelp";
      break;
    case "ru":
      title = "Гражданство России- AlterHelp";
      break;
    case "ua":
      title = "Громадянство Росії- AlterHelp";
      break;

    default:
      title = "Citizenship Russia - AlterHelp";
  }

  metadata.title = title;
  return <RuPage lng={lng} />;
};

export default RuComponent;
