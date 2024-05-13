"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "../Documents.module.scss";
import Image from "next/image";
import img from "@/assets/images/license.jpg";

interface DLProps {
  lng: string;
}

const DLPage: React.FC<DLProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "documents", DLPage);
  return (
    <div className={styles.documents__container}>
      <h1 className={styles.documents__title}>
        {t("documents.dl.title", { ns: "documents" })}
      </h1>
      <Image
        width={600}
        height={450}
        alt="DriverLicense"
        className={styles.documents__img}
        src={img}
      />
      <h3 className={styles.documents__description}>
        {t("documents.dl.title1", { ns: "documents" })}
      </h3>
      <h4 className={styles.documents__description}>
        {t("documents.dl.title2", { ns: "documents" })}
      </h4>
      <p className={styles.documents__description}>
        {t("documents.dl.title3", { ns: "documents" })}
      </p>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem1", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem2", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem3", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem4", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.ulitem5", { ns: "documents" })}
        </li>
      </ul>
      <div>
        <h4 className={styles.documents__description}>
          {t("documents.dl.text", { ns: "documents" })}
        </h4>
        <h4 className={styles.documents__title}>
          {t("documents.dl.text1", { ns: "documents" })}
        </h4>
      </div>
      <strong className={styles.documents__description}>
        {t("documents.dl.text2", { ns: "documents" })}
      </strong>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.dl.text3", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.text4", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.text5", { ns: "documents" })}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.dl.text6", { ns: "documents" })}
        </li>
      </ul>
      <p>{t("documents.dl.text7", { ns: "documents" })}</p>
    </div>
  );
};

export default DLPage;
