import AboutPage from "@/components/pages/About/page";
import { metadata } from "../layout";

interface AboutComponentProps {
  params: {
    lng: string;
  };
}

const AboutComponent = ({ params }: AboutComponentProps) => {
  const { lng } = params;

  let title = "About - AlterHelp";

  switch (lng) {
    case "de":
      title = "Artikel - AlterHelp";
      break;
    case "en":
      title = "About - AlterHelp";
      break;
    case "ru":
      title = "О компании - AlterHelp";
      break;
    case "ua":
      title = "Про компанію - AlterHelp";
      break;

    default:
      title = "About - AlterHelp";
  }

  metadata.title = title;
  return <AboutPage lng={lng} />;
};

export default AboutComponent;
