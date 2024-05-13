"use client";

import { useTranslation } from "@/app/i18n/client";
import styles from "../Documents.module.scss";
import Image from "next/image";
import img from "@/assets/images/postImg.jpg";

interface CertificatesPageProps {
  lng: string;
}
const CertificatesPage = ({ lng }: CertificatesPageProps) => {
  const { t } = useTranslation(lng, "documents", CertificatesPage);

  return (
    <div className={styles.documents__container}>
      <h1 className={styles.documents__title}>
        {t("documents.certificates.title")}
      </h1>
      <Image
        width={600}
        height={450}
        alt="Certificates"
        className={styles.documents__img}
        src={img}
      />
      <p className={styles.documents__descritpion}>
        {t("documents.certificates.documents_needed")}
      </p>
      <p className={styles.documents__descritpion}>
        {t("documents.certificates.how_we_help")}
      </p>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.provide_guidance")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.collect_documents")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.represent_interests")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.ensure_confidentiality")}
        </li>
      </ul>
      <h2 className={styles.documents__title}>
        {t("documents.certificates.why_choose_us")}
      </h2>
      <ul className={styles.documents__list}>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.experience")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.constant_updates")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.reliability_confidentiality")}
        </li>
        <li className={styles.documents__list__item}>
          {t("documents.certificates.affordable_prices")}
        </li>
      </ul>
      <p className={styles.documents__descritpion}>
        {t("documents.certificates.dont_waste_time")}
      </p>
      <p className={styles.documents__title}>
        {t("documents.certificates.contact_us_now")}
      </p>
    </div>
  );
};

export default CertificatesPage;
