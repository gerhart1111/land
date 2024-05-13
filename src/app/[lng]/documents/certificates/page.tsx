import CertificatesPage from "@/components/pages/Documents/certificates/page";
import { metadata } from "../../layout";

interface CertificatesPageProps {
  params: {
    lng: string;
  };
}
const CertificatesComponent = ({ params }: CertificatesPageProps) => {
  const { lng } = params;
  let title = "Certificates - AlterHelp";

  switch (lng) {
    case "de":
      title = "Zertifikat - AlterHelp";
      break;
    case "en":
      title = "Certificates - AlterHelp";
      break;
    case "ru":
      title = "Свидетельства - AlterHelp";
      break;
    case "ua":
      title = "Свідоцтва - AlterHelp";
      break;

    default:
      title = "Certificates - AlterHelp";
  }

  metadata.title = title;
  return <CertificatesPage lng={lng} />;
};

export default CertificatesComponent;
