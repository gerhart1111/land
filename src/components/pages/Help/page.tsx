"use client";

import { useTranslation } from "@/app/i18n/client";
import styles from "./Help.module.scss";
import Image from "next/image";
import img from "@/assets/images/info.jpeg";
interface HelpPageProps {
  lng: string;
}

const HelpPage = ({ lng }: HelpPageProps) => {
  const { t } = useTranslation(lng, "help", HelpPage);

  return (
    <div className={styles.help__container}>
      <h1 className={styles.help__title}>{t("help.title")}</h1>
      <Image
        width={600}
        height={450}
        alt="Search"
        className={styles.help__img}
        src={img}
      />
      <p className={styles.help__description}>{t("help.benefits")}</p>
      <ul className={styles.help__list}>
        <li className={styles.help__list__item}>{t("help.free_movement")}</li>
        <li className={styles.help__list__item}>
          {t("help.high_standard_of_living")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.business_opportunities")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.political_rights")}
        </li>
      </ul>
      <p className={styles.help__description}>{t("help.dont_delay_dream")}</p>
      <p className={styles.help__description}>{t("help.alterhelp_partner")}</p>
      <h2 className={styles.help__title}>{t("help.what_we_do")}</h2>
      <ul className={styles.help__list}>
        <li className={styles.help__list__item}>{t("help.choose_program")}</li>
        <li className={styles.help__list__item}>
          {t("help.collect_documents")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.prepare_interview")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.represent_interests")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.make_process_fast")}
        </li>
      </ul>
      <h2 className={styles.help__title}>{t("help.why_choose_alterhelp")}</h2>
      <ul className={styles.help__list}>
        <li className={styles.help__list__item}>{t("help.experience")}</li>
        <li className={styles.help__list__item}>{t("help.knowledge")}</li>
        <li className={styles.help__list__item}>
          {t("help.individual_approach")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.result_guarantee")}
        </li>
        <li className={styles.help__list__item}>
          {t("help.competitive_prices")}
        </li>
      </ul>
      <p className={styles.help__title}>{t("help.contact_us_now")}</p>
    </div>
  );
};

export default HelpPage;
