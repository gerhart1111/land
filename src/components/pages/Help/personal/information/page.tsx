"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../../Help.module.scss";
import Image from "next/image";
import img from "@/assets/images/info.jpeg";

interface InformationPageProps {
  lng: string;
}

const InformationPage = ({ lng }: InformationPageProps) => {
  const { t } = useTranslation(lng, "information", InformationPage);

  return (
    <div className={styles.help__container}>
      <h1 className={styles.help__title}>
        {t("information.main", { ns: "information" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Search"
        className={styles.help__img}
        src={img}
      />
      <h3 className={styles.help__description}>
        {t("information.main1", { ns: "information" })}
      </h3>
      <h4 className={styles.help__description}>
        {t("information.main2", { ns: "information" })}
      </h4>
      <h4 className={styles.help__description}>
        {t("information.main3", { ns: "information" })}
      </h4>
      <ul className={styles.help__list}>
        <li className={styles.help__list__item}>
          {t("information.mainul", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          {t("information.mainul1", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          {t("information.mainul2", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          {t("information.mainul3", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          {t("information.mainul4", { ns: "information" })}
        </li>
      </ul>
      <div>
        <h3 className={styles.help__description}>
          {t("information.maintext", { ns: "information" })}
        </h3>
        <h4 className={styles.help__description}>
          {t("information.maintext1", { ns: "information" })}
        </h4>
        <ul className={styles.help__list}>
          <li className={styles.help__list__item}>
            {t("information.maintext2", { ns: "information" })}
          </li>
          <li className={styles.help__list__item}>
            {t("information.maintext3", { ns: "information" })}
          </li>
          <li className={styles.help__list__item}>
            {t("information.maintext4", { ns: "information" })}
          </li>
        </ul>
      </div>
      <p className={styles.help__title}>
        {t("information.maintext5", { ns: "information" })}
      </p>
      <h3 className={styles.help__title}>
        {t("information.title", { ns: "information" })}
      </h3>
      <ul className={styles.help__list}>
        <li className={styles.help__list__item}>
          <strong>{t("information.title1", { ns: "information" })}</strong>
          {t("information.title2", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          <strong>{t("information.ulitem1", { ns: "information" })}</strong>
          {t("information.ulitem2", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          <strong> {t("information.ulitem3", { ns: "information" })}</strong>
          {t("information.ulitem4", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          <strong> {t("information.ulitem4", { ns: "information" })}</strong>
          {t("information.ulitem5", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          <strong> {t("information.ulitem6", { ns: "information" })}</strong>
          {t("information.ulitem7", { ns: "information" })}
        </li>
        <li className={styles.help__list__item}>
          <strong> {t("information.ulitem8", { ns: "information" })}</strong>
          {t("information.ulitem9", { ns: "information" })}
        </li>
      </ul>
      <p className={styles.help__title}>
        {t("information.ulitem10", { ns: "information" })}
      </p>
    </div>
  );
};

export default InformationPage;
