"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "./Documents.module.scss";
import Image from "next/image";
import img from "@/assets/images/solving.jpg";

interface DocumentsPageProps {
  lng: string;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "documents", DocumentsPage);
  return (
    <div className={styles.documents__container}>
      <h1 className={styles.documents__title}>{t("documents.title")}</h1>
      <Image
        width={600}
        height={450}
        alt="Documents"
        className={styles.documents__img}
        src={img}
      />
      <p className={styles.documents__description}>{t("documents.need")}</p>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.birth_certificate")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.marriage_certificate")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.death_certificate")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.name_change_certificate")}
        </li>
        <li className={styles.documents__list__item}>{t("documents.other")}</li>
      </ul>
      <p className={styles.documents__description}>{t("documents.team")}</p>
      <h2 className={styles.documents__title}>{t("documents.how_we_help")}</h2>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.consult")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.documents_assemble")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.forms_fill")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.represent")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.process_fast")}
        </li>
      </ul>
      <h2 className={styles.documents__title}>
        {t("documents.why_choose_us")}
      </h2>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.experience")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.knowledge")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.reliability")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.time_saving")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.competitive_prices")}
        </li>
      </ul>
      <p className={styles.documents__description}>
        {t("documents.dont_waste_time")}
      </p>
      <p className={styles.documents__title}>{t("documents.key_to_success")}</p>
      <h2 className={styles.documents__description}>
        {t("documents.additional_services")}
      </h2>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.duplicates")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.restore")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.apostille")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.represent_in_court")}
        </li>
      </ul>
      <p className={styles.documents__title}>{t("documents.contact_us_now")}</p>
    </div>
  );
};

export default DocumentsPage;
