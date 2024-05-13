"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../Citizenship.module.scss";
import Image from "next/image";
import img from "@/assets/images/eu.jpg";

interface EUPageProps {
  lng: string;
}
const EUPage = ({ lng }: EUPageProps) => {
  const { t } = useTranslation(lng, "citizenship", EUPage);

  return (
    <div className={styles.citizenship__container}>
      <h1 className={styles.citizenship__title}>
        {t("citizenship.eu.title", { ns: "citizenship" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="CitizenshipEU"
        className={styles.citizenship__img}
        src={img}
      />
      <h3 className={styles.citizenship__description}>
        {t("citizenship.eu.title1", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.eu.title2", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.eu.section", { ns: "citizenship" })}:</strong>
          {t("citizenship.eu.section1", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section2", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section3", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section4", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section5", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section6", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section7", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section8", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section9", { ns: "citizenship" })}
        </li>
      </ul>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.eu.section10", { ns: "citizenship" })}
      </h3>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section11", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section12", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section13", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section14", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section15", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section16", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>
            {t("citizenship.eu.section17", { ns: "citizenship" })}:
          </strong>
          {t("citizenship.eu.section18", { ns: "citizenship" })}
        </li>
      </ul>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.eu.section19", { ns: "citizenship" })}
      </h4>
      <p className={styles.citizenship__description}>
        {t("citizenship.eu.section20", { ns: "citizenship" })}
      </p>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.eu.section21", { ns: "citizenship" })}
      </h3>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.eu.section22", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.eu.section23", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.eu.section24", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.eu.section25", { ns: "citizenship" })}
        </li>
      </ul>
      <h4>{t("citizenship.eu.section26", { ns: "citizenship" })}</h4>
      <p className={styles.citizenship__description}>
        {t("citizenship.eu.section27", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.eu.section28", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.eu.section29", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__title}>
        {t("citizenship.eu.section30", { ns: "citizenship" })}
      </p>
    </div>
  );
};

export default EUPage;
