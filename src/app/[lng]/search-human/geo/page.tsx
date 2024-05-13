import SearchGeoPage from "@/components/pages/Search-Human/geo/page";
import { metadata } from "../../layout";

interface SearchGeoPageProps {
  params: {
    lng: string;
  };
}
const SearchGeoComponent = ({ params }: SearchGeoPageProps) => {
  const { lng } = params;
  let title = "Search Person GEO - AlterHelp";

  switch (lng) {
    case "de":
      title = "Person suchen GEO - AlterHelp";
      break;
    case "en":
      title = "Search Person GEO - AlterHelp";
      break;
    case "ru":
      title = "Поиск человека GEO - AlterHelp";
      break;
    case "ua":
      title = "Пошук людини GEO - AlterHelp";
      break;

    default:
      title = "Search Person GEO - AlterHelp";
  }

  metadata.title = title;
  return <SearchGeoPage lng={lng} />;
};

export default SearchGeoComponent;
