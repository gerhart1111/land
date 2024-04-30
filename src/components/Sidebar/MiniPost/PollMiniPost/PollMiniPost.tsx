"use client";

import { useState } from "react";
import styles from "./PollMiniPost.module.scss";
import { useTranslation } from "@/app/i18n/client";

interface PollMiniPostProps {
  lng: string;
}

const PollMiniPost = ({ lng }: PollMiniPostProps) => {
  const [answer, setAnswer] = useState(null);
  const { t } = useTranslation(lng, "sidebar", PollMiniPost);

  const handleClick = (e: any) => {
    setAnswer(e.target.innerText);
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>{t("sidebar.minipollpost.title")}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleClick}>
          {t("sidebar.minipollpost.country-usa")}
        </button>
        <button className={styles.button} onClick={handleClick}>
          {t("sidebar.minipollpost.country-eu")}
        </button>
        <button className={styles.button} onClick={handleClick}>
          {t("sidebar.minipollpost.country-russia")}
        </button>
        <button className={styles.button} onClick={handleClick}>
          {t("sidebar.minipollpost.country-ukraine")}
        </button>
      </div>
    </div>
  );
};

export default PollMiniPost;
