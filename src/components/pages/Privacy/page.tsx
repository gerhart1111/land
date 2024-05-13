"use client";
import { useTranslation } from "@/app/i18n/client";
import styles from "./Privacy.module.scss";

interface PrivacyPageProps {
  lng: string;
}

const PrivacyPage = ({ lng }: PrivacyPageProps) => {
  const { t } = useTranslation(lng, "privacy", PrivacyPage);

  return (
    <div className={styles.privacy__container}>
      <h1 className={styles.privacy__title}>
        {t("privacy.title", { ns: "privacy" })}
      </h1>

      <h3 className={styles.privacy__section__title}>
        {t("privacy.title1", { ns: "privacy" })}
      </h3>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title2", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title3", { ns: "privacy" })}
      </p>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title4", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title5", { ns: "privacy" })}
      </p>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title6", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title7", { ns: "privacy" })}
      </p>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title8", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title9", { ns: "privacy" })}
      </p>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title10", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title11", { ns: "privacy" })}
      </p>
      <h4 className={styles.privacy__section__title}>
        {t("privacy.title12", { ns: "privacy" })}
      </h4>
      <p className={styles.privacy__description}>
        {t("privacy.title13", { ns: "privacy" })}
      </p>
      <p className={styles.privacy__description}>
        {t("privacy.title14", { ns: "privacy" })}
      </p>
    </div>
  );
};

export default PrivacyPage;
