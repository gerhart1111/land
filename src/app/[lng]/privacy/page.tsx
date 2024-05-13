import PrivacyPage from "@/components/pages/Privacy/page";
import { metadata } from "../layout";

interface PrivacyPageProps {
  params: {
    lng: string;
  };
}

const PrivacyComponent = ({ params }: PrivacyPageProps) => {
  const { lng } = params;
  let title = "Privacy policy - AlterHelp";

  switch (lng) {
    case "de":
      title = "Datenschutzrichtlinie - AlterHelp";
      break;
    case "en":
      title = "Privacy policy - AlterHelp";
      break;
    case "ru":
      title = "Политика конфиденциальности - AlterHelp";
      break;
    case "ua":
      title = "Політика конфіденційності - AlterHelp";
      break;

    default:
      title = "Privacy policy - AlterHelp";
  }

  metadata.title = title;
  return <PrivacyPage lng={lng} />;
};

export default PrivacyComponent;
