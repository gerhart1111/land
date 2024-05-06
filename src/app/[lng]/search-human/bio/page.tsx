"use client";
import { useTranslation } from "@/app/i18n/client";

interface SearchBioPagePageProps {
  params: {
    lng: string;
  };
}
const SearchBioPage = ({ params }: SearchBioPagePageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "search", SearchBioPage);

  return (
    <div>
      <h2>{t("search.bio.title", { ns: "search" })}</h2>
      <h4>{t("search.bio.title1", { ns: "search" })}</h4>
      <ul>
        <li>
          <strong>{t("search.bio.section", { ns: "search" })}</strong>
          {t("search.bio.section1", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section2", { ns: "search" })}</strong>
          {t("search.bio.section2-1", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section3", { ns: "search" })}</strong>
          {t("search.bio.section4", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section5", { ns: "search" })}</strong>
          {t("search.bio.section6", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section7", { ns: "search" })}</strong>
          {t("search.bio.section8", { ns: "search" })}
        </li>
      </ul>
      <h3>{t("search.bio.section9", { ns: "search" })}</h3>
      <ul>
        <li>
          <strong>{t("search.bio.section10", { ns: "search" })}</strong>
          {t("search.bio.section11", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section12", { ns: "search" })}</strong>
          {t("search.bio.section13", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section14", { ns: "search" })}</strong>
          {t("search.bio.section15", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section16", { ns: "search" })}</strong>
          {t("search.bio.section17", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section18", { ns: "search" })}</strong>
          {t("search.bio.section19", { ns: "search" })}
        </li>
      </ul>
      <h4>{t("search.bio.section20", { ns: "search" })}</h4>
      <ul>
        <li>
          <strong>{t("search.bio.section21", { ns: "search" })}</strong>
          {t("search.bio.section22", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section23", { ns: "search" })}</strong>
          {t("search.bio.section24", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section25", { ns: "search" })}</strong>
          {t("search.bio.section26", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section27", { ns: "search" })}</strong>
          {t("search.bio.section28", { ns: "search" })}
        </li>
      </ul>
      <h4>{t("search.bio.section29", { ns: "search" })}</h4>
      <p>{t("search.bio.section30", { ns: "search" })}</p>
    </div>
  );
};

export default SearchBioPage;
