"use client";

import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import React from "react";
import styles from "./Citizenship.module.scss";
import img from "@/assets/images/citiz.jpg";

interface CitizenshipPageProps {
  lng: string;
}

const CitizenshipPage: React.FC<CitizenshipPageProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "citizenship", CitizenshipPage);

  return (
    <div className={styles.citizenship__container}>
      <h1 className={styles.citizenship__title}>
        {t("citizenship.title", { ns: "citizenship" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Citizenship"
        className={styles.citizenship__img}
        src={img}
      />
      <h2 className={styles.citizenship__title}>
        {t("citizenship.title1", { ns: "citizenship" })}
      </h2>
      <h3 className={styles.citizenship__description}>
        {t("citizenship.title2", { ns: "citizenship" })}
      </h3>
      <h4 className={styles.citizenship__description}>
        {t("citizenship.section", { ns: "citizenship" })}
      </h4>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.section1", { ns: "citizenship" })}:</strong>
          {t("citizenship.section2", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.section3", { ns: "citizenship" })}:</strong>
          {t("citizenship.section4", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.section5", { ns: "citizenship" })}:</strong>
          {t("citizenship.section6", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong> {t("citizenship.section7", { ns: "citizenship" })}:</strong>
          {t("citizenship.section8", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.section9", { ns: "citizenship" })}:</strong>
          {t("citizenship.section10", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          <strong>{t("citizenship.section11", { ns: "citizenship" })}:</strong>
          {t("citizenship.section12", { ns: "citizenship" })}
        </li>
      </ul>
      <h2 className={styles.citizenship__title}>
        {t("citizenship.section13", { ns: "citizenship" })}
      </h2>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section14", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section15", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section16", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section17", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section18", { ns: "citizenship" })}
        </li>
      </ul>
      <h2 className={styles.citizenship__title}>
        {t("citizenship.section19", { ns: "citizenship" })}
      </h2>
      <p className={styles.citizenship__description}>
        {t("citizenship.section20", { ns: "citizenship" })}
      </p>
      <ul className={styles.citizenship__list}>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section21", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section22", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section23", { ns: "citizenship" })}
        </li>
        <li className={styles.citizenship__list__item}>
          {t("citizenship.section24", { ns: "citizenship" })}
        </li>
      </ul>
      <h2 className={styles.citizenship__title}>
        {t("citizenship.section25", { ns: "citizenship" })}
      </h2>
      <p className={styles.citizenship__description}>
        {t("citizenship.section26", { ns: "citizenship" })}
      </p>
      <p className={styles.citizenship__description}>
        {t("citizenship.section27", { ns: "citizenship" })}
      </p>
    </div>
  );
};

export default CitizenshipPage;
