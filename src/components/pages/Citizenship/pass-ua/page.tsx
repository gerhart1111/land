"use client";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import styles from "../Citizenship.module.scss";
import img from "@/assets/images/ua.jpg";

interface UaPageProps {
  lng: string;
}
const UaPage = ({ lng }: UaPageProps) => {
  const { t } = useTranslation(lng, "citizenship", UaPage);

  return (
    <div className={styles.citizenship__container}>
      <h1 className={styles.citizenship__title}>
        {t("citizenship.ukr.title", { ns: "citizenship" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="CitizenshipUa"
        className={styles.citizenship__img}
        src={img}
      />
      <h3 className={styles.citizenship__description}>
        {t("citizenship.ukr.title1", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.ukr.title2", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.ukr.section", { ns: "citizenship" })}</strong>
          {t("citizenship.ukr.section1", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.ukr.section2", { ns: "citizenship" })}
          </strong>
          {t("citizenship.ukr.section3", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.ukr.section4", { ns: "citizenship" })}
          </strong>
          {t("citizenship.ukr.section5", { ns: "citizenship" })}
        </li>
      </ul>
      <h3 className={styles.citizenship__title}>
        {t("citizenship.ukr.section6", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.ukr.section7", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section8", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section9", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section10", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section11", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section12", { ns: "citizenship" })}
        </li>
      </ul>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.ukr.section13", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section14", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section15", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section16", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section17", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.ukr.section18", { ns: "citizenship" })}
        </li>
      </ul>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.ukr.section19", { ns: "citizenship" })}
      </h4>
      <p className={styles.citizenship__description}>
        {t("citizenship.ukr.section20", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.ukr.section21", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.ukr.section22", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__title}>
        {t("citizenship.eu.section30", { ns: "citizenship" })}
      </p>
    </div>
  );
};

export default UaPage;
