"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "./SearchHuman.module.scss";
import Image from "next/image";
import img from "@/assets/images/probiv2.jpg";

interface SearcHumanPagePageProps {
  lng: string;
}

const SearcHumanPage = ({ lng }: SearcHumanPagePageProps) => {
  const { t } = useTranslation(lng, "search", SearcHumanPage);

  return (
    <div className={styles.search__container}>
      <h1 className={styles.search__title}>
        {t("search.main.title", { ns: "search" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Search"
        className={styles.search__img}
        src={img}
      />
      <h3 className={styles.search__description}>
        {t("search.main.title1", { ns: "search" })}
      </h3>
      <h4 className={styles.search__description}>
        {t("search.main.title2", { ns: "search" })}
      </h4>
      <p className={styles.search__description}>
        {t("search.main.title3", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title4", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title5", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title6", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title7", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title8", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title9", { ns: "search" })}
      </p>
      <p className={styles.search__description}>
        {t("search.main.title10", { ns: "search" })}
      </p>
    </div>
  );
};

export default SearcHumanPage;
