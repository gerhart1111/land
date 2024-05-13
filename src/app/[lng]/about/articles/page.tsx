import React from "react";
import { metadata } from "../../layout";
import ArticlesPage from "@/components/pages/About/articles/page";

interface ArticlesMainPageProps {
  params: {
    lng: string;
  };
}

const ArticlesMainPage: React.FC<ArticlesMainPageProps> = ({ params }) => {
  const { lng } = params;
  let title = "Articles - AlterHelp";

  switch (lng) {
    case "de":
      title = "Artikel - AlterHelp";
      break;
    case "en":
      title = "Articles - AlterHelp";
      break;
    case "ru":
      title = "Статьи - AlterHelp";
      break;
    case "ua":
      title = "Статті - AlterHelp";
      break;

    default:
      title = "Articles - AlterHelp";
  }

  metadata.title = title;
  return (
    <>
      <ArticlesPage lng={lng} />
    </>
  );
};

export default ArticlesMainPage;
