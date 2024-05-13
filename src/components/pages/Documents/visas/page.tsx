"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../Documents.module.scss";
import Image from "next/image";
import img from "@/assets/images/visa.jpg";

interface VisasPageProps {
  lng: string;
}

const VisasPage = ({ lng }: VisasPageProps) => {
  const { t } = useTranslation(lng, "documents", VisasPage);

  return (
    <div className={styles.documents__container}>
      <h1 className={styles.documents__title}>
        {t("documents.visas.title", { ns: "documents" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Visa"
        className={styles.documents__img}
        src={img}
      />
      <h3 className={styles.documents__description}>
        {t("documents.visas.title1", { ns: "documents" })}
      </h3>
      <h4 className={styles.documents__description}>
        {t("documents.visas.title2", { ns: "documents" })}
      </h4>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.visas.ulitem", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.visas.ulitem1", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.visas.ulitem2", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.visas.ulitem3", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.visas.ulitem4", { ns: "documents" })}
        </li>
      </ul>
      <strong className={styles.documents__description}>
        {t("documents.visas.text", { ns: "documents" })}
      </strong>
      <p className={styles.documents__description}>
        {t("documents.visas.text1", { ns: "documents" })}
      </p>
      <strong className={styles.documents__description}>
        {t("documents.visas.text2", { ns: "documents" })}
      </strong>
      <p className={styles.documents__description}>
        {t("documents.visas.text3", { ns: "documents" })}
      </p>
      <strong className={styles.documents__description}>
        {t("documents.visas.text4", { ns: "documents" })}
      </strong>
      <p className={styles.documents__description}>
        {t("documents.visas.text5", { ns: "documents" })}
      </p>
      <strong className={styles.documents__description}>
        {t("documents.visas.text6", { ns: "documents" })}
      </strong>
      <p className={styles.documents__description}>
        {t("documents.visas.text7", { ns: "documents" })}
      </p>
      <p className={styles.documents__title}>
        {t("documents.visas.text8", { ns: "documents" })}
      </p>
      <h5>{t("documents.visas.text9", { ns: "documents" })}</h5>
    </div>
  );
};

export default VisasPage;
