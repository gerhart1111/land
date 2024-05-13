"use client";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import styles from "../Citizenship.module.scss";
import img from "@/assets/images/ru.jpg";

interface RuPageProps {
  lng: string;
}
const RuPage = ({ lng }: RuPageProps) => {
  const { t } = useTranslation(lng, "citizenship", RuPage);

  return (
    <div className={styles.citizenship__container}>
      <h1 className={styles.citizenship__title}>
        {t("citizenship.ru.title", { ns: "citizenship" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="CitizenshipRu"
        className={styles.citizenship__img}
        src={img}
      />
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.title1", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.ru.title2", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ru.section", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ru.section1", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ru.section2", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ru.section3", { ns: "citizenship" })}
        </li>
      </ul>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.section4", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section5", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section6", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.section7", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section8", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.section9", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section10", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.section11", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section12", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ru.section13", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.ru.section14", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__title}>
        {t("citizenship.ru.section15", { ns: "citizenship" })}
      </h3>
    </div>
  );
};

export default RuPage;
