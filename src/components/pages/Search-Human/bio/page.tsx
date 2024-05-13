"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../SearchHuman.module.scss";
import Image from "next/image";
import img from "@/assets/images/probiv.jpg";

interface SearchBioPagePageProps {
  lng: string;
}
const SearchBioPage = ({ lng }: SearchBioPagePageProps) => {
  const { t } = useTranslation(lng, "search", SearchBioPage);

  return (
    <div className={styles.search__container}>
      <h1 className={styles.search__title}>
        {t("search.bio.title", { ns: "search" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Search"
        className={styles.search__img}
        src={img}
      />
      <h3 className={styles.search__description}>
        {t("search.bio.title1", { ns: "search" })}
      </h3>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section", { ns: "search" })}</strong>
          {t("search.bio.section1", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section2", { ns: "search" })}</strong>
          {t("search.bio.section2-1", { ns: "search" })}
        </li>
        <li>
          <strong>{t("search.bio.section3", { ns: "search" })}</strong>
          {t("search.bio.section4", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section5", { ns: "search" })}</strong>
          {t("search.bio.section6", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section7", { ns: "search" })}</strong>
          {t("search.bio.section8", { ns: "search" })}
        </li>
      </ul>
      <h3 className={styles.search__title}>
        {t("search.bio.section9", { ns: "search" })}
      </h3>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section10", { ns: "search" })}</strong>
          {t("search.bio.section11", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section12", { ns: "search" })}</strong>
          {t("search.bio.section13", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section14", { ns: "search" })}</strong>
          {t("search.bio.section15", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section16", { ns: "search" })}</strong>
          {t("search.bio.section17", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section18", { ns: "search" })}</strong>
          {t("search.bio.section19", { ns: "search" })}
        </li>
      </ul>
      <h4 className={styles.search__title}>
        {t("search.bio.section20", { ns: "search" })}
      </h4>
      <ul className={styles.search__list}>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section21", { ns: "search" })}</strong>
          {t("search.bio.section22", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section23", { ns: "search" })}</strong>
          {t("search.bio.section24", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section25", { ns: "search" })}</strong>
          {t("search.bio.section26", { ns: "search" })}
        </li>
        <li className={styles.search__list__item}>
          <strong>{t("search.bio.section27", { ns: "search" })}</strong>
          {t("search.bio.section28", { ns: "search" })}
        </li>
      </ul>
      <h4>{t("search.bio.section29", { ns: "search" })}</h4>
      <p className={styles.search__title}>
        {t("search.bio.section30", { ns: "search" })}
      </p>
    </div>
  );
};

export default SearchBioPage;
