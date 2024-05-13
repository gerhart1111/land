"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../Citizenship.module.scss";
import Image from "next/image";
import img from "@/assets/images/Alter.jpg";

interface LegalizationPageProps {
  lng: string;
}
const LegalizationPage = ({ lng }: LegalizationPageProps) => {
  const { t } = useTranslation(lng, "citizenship", LegalizationPage);

  return (
    <div className={styles.citizenship__container}>
      <h1 className={styles.citizenship__title}>
        {t("citizenship.lega.title", { ns: "citizenship" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Citizenship"
        className={styles.citizenship__img}
        src={img}
      />
      <h3 className={styles.citizenship__title}>
        {t("citizenship.lega.title1", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.lega.title2", { ns: "citizenship" })}
      </h4>
      <p className={styles.citizenship__description}>
        {t("citizenship.lega.section", { ns: "citizenship" })}
      </p>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.lega.section1", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.lega.section2", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section3", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.lega.section4", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section5", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.lega.section6", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.lega.section7", { ns: "citizenship" })}
        </li>
      </ul>
      <h3 className={styles.citizenship__title}>
        {t("citizenship.lega.section8", { ns: "citizenship" })}
      </h3>
      <p className={styles.citizenship__description}>
        {t("citizenship.lega.section9", { ns: "citizenship" })}
      </p>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section10", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section11", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section12", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section13", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section14", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section15", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section16", { ns: "citizenship" })}
        </li>
      </ul>
      <p className={styles.citizenship__description}>
        {t("citizenship.lega.section17", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.lega.section18", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__title}>
        {t("citizenship.lega.section25", { ns: "citizenship" })}
      </h3>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section19", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section20", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section21", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section22", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.lega.section23", { ns: "citizenship" })}
        </li>
      </ul>
      <p className={styles.citizenship__description}>
        {t("citizenship.eu.section30", { ns: "citizenship" })}
      </p>
      <h4 className={styles.citizenship__title}>
        {t("citizenship.lega.section24", { ns: "citizenship" })}
      </h4>
    </div>
  );
};

export default LegalizationPage;
