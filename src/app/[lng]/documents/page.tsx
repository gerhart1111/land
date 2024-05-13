import DocumentsPage from "@/components/pages/Documents/page";
import { metadata } from "../layout";

interface DocumentsPageProps {
  params: {
    lng: string;
  };
}

const DocumentsComponent: React.FC<DocumentsPageProps> = ({ params }) => {
  const { lng } = params;
  let title = "Documents - AlterHelp";

  switch (lng) {
    case "de":
      title = "Urkunden - AlterHelp";
      break;
    case "en":
      title = "Documents - AlterHelp";
      break;
    case "ru":
      title = "Документы - AlterHelp";
      break;
    case "ua":
      title = "Документи - AlterHelp";
      break;

    default:
      title = "Documents - AlterHelp";
  }

  metadata.title = title;
  return <DocumentsPage lng={lng} />;
};

export default DocumentsComponent;
