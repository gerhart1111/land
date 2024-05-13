"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import styles from "./About.module.scss";
import alter from "@/assets/images/Alter.jpg";
import Image from "next/image";

interface AboutPageProps {
  lng: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ lng }: AboutPageProps) => {
  const { t } = useTranslation(lng, "about", AboutPage);

  return (
    <div className={styles.about__container}>
      <h1 className={styles.about__title}>{t("about.titile")}</h1>
      <Image
        src={alter}
        width={600}
        height={450}
        alt="AlterHelp"
        className={styles.about__img}
      />
      <p className={styles.about__description}>{t("about.titile1")}</p>
      <ul className={styles.about__list}>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile2")}</strong>
          {t("about.titile3")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile4")}</strong>
          {t("about.titile5")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile6")}</strong>
          {t("about.titile7")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile8")}</strong>
          {t("about.titile9")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile11")}</strong>
          {t("about.titile12")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile13")}</strong>
          {t("about.titile14")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile15")}</strong>
          {t("about.titile16")}
        </li>
        <li className={styles.about__list__item}>
          <strong>{t("about.titile17")}</strong>
          {t("about.titile18")}
        </li>
      </ul>
      <p className={styles.about__description}>{t("about.section2")}</p>
      <h2 className={styles.about__section__title}>{t("about.section3")}</h2>
      <p className={styles.about__section__content}>{t("about.section4")}</p>
      <p className={styles.about__section__content}>{t("about.section5")}</p>
      <p className={styles.about__section__content}>{t("about.section6")}</p>
      <p className={styles.about__section__content}>{t("about.section7")}</p>
      <p className={styles.about__section__content}>{t("about.section8")}</p>
      <p className={styles.about__section__content}>{t("about.section9")}</p>
      <p className={styles.about__section__content}>{t("about.section10")}</p>
    </div>
  );
};

export default AboutPage;
