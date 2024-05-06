"use client";
import { useTranslation } from "@/app/i18n/client";

interface SearchGeoPageProps {
  params: {
    lng: string;
  };
}
const SearchGeoPage = ({ params }: SearchGeoPageProps) => {
  const { lng } = params;
  const { t } = useTranslation(lng, "search", SearchGeoPage);

  return (
    <div>
      <h2>{t("search.geo.title", { ns: "search" })}</h2>
      <h4>{t("search.geo.title1", { ns: "search" })}</h4>
      <ul>
        <li>
          <strong>{t("search.geo.section", { ns: "search" })}</strong>
          {t("search.geo.section1", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section2", { ns: "search" })}</strong>
          {t("search.geo.section3", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section4", { ns: "search" })}</strong>
          {t("search.geo.section5", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section6", { ns: "search" })}</strong>
          {t("search.geo.section7", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section8", { ns: "search" })}</strong>
          {t("search.geo.section9", { ns: "search" })}
        </li>
      </ul>
      <h3>{t("search.geo.section10", { ns: "search" })}</h3>
      <ul>
        <li>
          <strong>{t("search.geo.section11", { ns: "search" })}</strong>
          {t("search.geo.section12", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section13", { ns: "search" })}</strong>
          {t("search.geo.section14", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section15", { ns: "search" })}</strong>
          {t("search.geo.section16", { ns: "search" })}
        </li>
      </ul>
      <h4>{t("search.geo.section17", { ns: "search" })}</h4>
      <ul>
        <li>{t("search.geo.section18", { ns: "search" })}</li>
        <li>{t("search.geo.section19", { ns: "search" })}</li>
        <li>{t("search.geo.section20", { ns: "search" })}</li>
        <li>{t("search.geo.section21", { ns: "search" })}</li>
      </ul>
      <p>{t("search.geo.section22", { ns: "search" })}</p>
      <h4>{t("search.geo.section23", { ns: "search" })}</h4>
      <ul>
        <li>
          <strong>{t("search.geo.section24", { ns: "search" })}</strong>
          {t("search.geo.section25", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section26", { ns: "search" })}</strong>
          {t("search.geo.section27", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.geo.section28", { ns: "search" })}</strong>
          {t("search.geo.section29", { ns: "search" })}
        </li>
      </ul>
      <h4> {t("search.geo.section30", { ns: "search" })}</h4>
    </div>
  );
};

export default SearchGeoPage;
