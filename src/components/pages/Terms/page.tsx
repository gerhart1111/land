"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "./Terms.module.scss";

interface TermsPagePageProps {
  lng: string;
}

const TermsPage = ({ lng }: TermsPagePageProps) => {
  const { t } = useTranslation(lng, "terms", TermsPage);

  return (
    <div className={styles.terms__container}>
      <h1 className={styles.terms__title}>
        {t("terms.title", { ns: "terms" })}
      </h1>
      <h3 className={styles.terms__description}>
        {t("terms.title1", { ns: "terms" })}
      </h3>
      <h4 className={styles.terms__description}>
        {t("terms.title2", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title3", { ns: "terms" })}
      </p>
      <h4 className={styles.terms__title}>
        {t("terms.title4", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title5", { ns: "terms" })}
      </p>
      <h4 className={styles.terms__title}>
        {t("terms.title6", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title7", { ns: "terms" })}
      </p>
      <h4 className={styles.terms__title}>
        {t("terms.title8", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title9", { ns: "terms" })}
      </p>
      <h4 className={styles.terms__title}>
        {t("terms.title10", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title11", { ns: "terms" })}
      </p>
      <h4 className={styles.terms__title}>
        {t("terms.title12", { ns: "terms" })}
      </h4>
      <p className={styles.terms__section__content}>
        {t("terms.title13", { ns: "terms" })}
      </p>
      <p className={styles.terms__section__content}>
        {t("terms.title14", { ns: "terms" })}
      </p>
    </div>
  );
};

export default TermsPage;
