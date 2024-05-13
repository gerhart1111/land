import TermsPage from "@/components/pages/Terms/page";
import { metadata } from "../layout";

interface TermsPagePageProps {
  params: {
    lng: string;
  };
}

const TermsComponent = ({ params }: TermsPagePageProps) => {
  const { lng } = params;
  let title = "Terms of service - AlterHelp";

  switch (lng) {
    case "de":
      title = "Nutzungsbedingungen - AlterHelp";
      break;
    case "en":
      title = "Terms of service - AlterHelp";
      break;
    case "ru":
      title = "Условия предоставления услуг - AlterHelp";
      break;
    case "ua":
      title = "Умови надання послуг - AlterHelp";
      break;

    default:
      title = "Terms of service - AlterHelp";
  }

  metadata.title = title;
  return <TermsPage lng={lng} />;
};

export default TermsComponent;
