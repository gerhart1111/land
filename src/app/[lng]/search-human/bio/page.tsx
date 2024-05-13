import SearchBioPage from "@/components/pages/Search-Human/bio/page";
import { metadata } from "../../layout";

interface SearchBioPagePageProps {
  params: {
    lng: string;
  };
}
const SearchBioComponent = ({ params }: SearchBioPagePageProps) => {
  const { lng } = params;
  let title = "Search Person BIO - AlterHelp";

  switch (lng) {
    case "de":
      title = "Person suchen BIO - AlterHelp";
      break;
    case "en":
      title = "Search Person BIO - AlterHelp";
      break;
    case "ru":
      title = "Поиск человека BIO - AlterHelp";
      break;
    case "ua":
      title = "Пошук людини BIO - AlterHelp";
      break;

    default:
      title = "Search Person BIO - AlterHelp";
  }

  metadata.title = title;
  return <SearchBioPage lng={lng} />;
};

export default SearchBioComponent;
