"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../SearchHuman.module.scss";
import Image from "next/image";
import img from "@/assets/images/probiv2.jpg";

interface SearchGeoPageProps {
  lng: string;
}
const SearchGeoPage = ({ lng }: SearchGeoPageProps) => {
  const { t } = useTranslation(lng, "search", SearchGeoPage);

  return (
    <div className={styles.search__container}>
      <h1 className={styles.search__title}>
        {t("search.geo.title", { ns: "search" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Search"
        className={styles.search__img}
        src={img}
      />
      <h3 className={styles.search__description}>
        {t("search.geo.title1", { ns: "search" })}
      </h3>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section", { ns: "search" })}</strong>
          {t("search.geo.section1", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section2", { ns: "search" })}</strong>
          {t("search.geo.section3", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section4", { ns: "search" })}</strong>
          {t("search.geo.section5", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section6", { ns: "search" })}</strong>
          {t("search.geo.section7", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section8", { ns: "search" })}</strong>
          {t("search.geo.section9", { ns: "search" })}
        </li>
      </ul>
      <h3 className={styles.search__title}>
        {t("search.geo.section10", { ns: "search" })}
      </h3>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section11", { ns: "search" })}</strong>
          {t("search.geo.section12", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section13", { ns: "search" })}</strong>
          {t("search.geo.section14", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section15", { ns: "search" })}</strong>
          {t("search.geo.section16", { ns: "search" })}
        </li>
      </ul>
      <h4 className={styles.search__title}>
        {t("search.geo.section17", { ns: "search" })}
      </h4>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          {t("search.geo.section18", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          {t("search.geo.section19", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          {t("search.geo.section20", { ns: "search" })}
        </li>
      </ul>
      <p className={styles.search__description}>
        {t("search.geo.section21", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.geo.section22", { ns: "search" })}
      </p>
      <h4 className={styles.search__title}>
        {t("search.geo.section23", { ns: "search" })}
      </h4>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section24", { ns: "search" })}</strong>
          {t("search.geo.section25", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section26", { ns: "search" })}</strong>
          {t("search.geo.section27", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.geo.section28", { ns: "search" })}</strong>
          {t("search.geo.section29", { ns: "search" })}
        </li>
      </ul>
      <h4 className={styles.search__description}>
        {t("search.geo.section30", { ns: "search" })}
      </h4>
    </div>
  );
};

export default SearchGeoPage;
