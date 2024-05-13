import HomePage from "@/components/pages/Home";
import { metadata } from "./layout";

export default function Home({ params: { lng } }: any) {
  let title = "AlterHelp - Home Page";
  switch (lng) {
    case "de":
      title = "AlterHelp - Home Page";
      break;
    case "en":
      title = "AlterHelp - Home Page";
      break;
    case "ru":
      title = "AlterHelp - Главная страница";
      break;
    case "ua":
      title = "AlterHelp - Головна сторінка";
      break;

    default:
      title = "AlterHelp - Home Page";
  }
  metadata.title = title;
  return <HomePage lng={lng} />;
}
