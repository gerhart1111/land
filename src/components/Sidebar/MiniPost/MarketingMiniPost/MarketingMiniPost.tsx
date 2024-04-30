"use client";
import Image from "next/image";
import styles from "./MarketingMiniPost.module.scss";
import { useTranslation } from "@/app/i18n/client";
import { inter } from "@/lib/fonts";
import pass from "../../../../assets/images/pass.jpg";

interface MarketingMiniPostProps {
  lng: string;
}

const MarketingMiniPost = ({ lng }: MarketingMiniPostProps) => {
  const { t } = useTranslation(lng, ["sidebar", "common"], MarketingMiniPost);

  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.title}>{t("sidebar.minipost.title")}</div>
        <Image
          width={250}
          height={250}
          className={styles.img}
          src={pass}
          alt="img"
        />
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.5 2.34375C12.1875 2.34375 15 7.5 15 7.5C15 7.5 12.1875 12.6562 7.5 12.6562C2.8125 12.6562 0 7.5 0 7.5C0 7.5 2.8125 2.34375 7.5 2.34375ZM7.5 3.28125C4.2 3.28125 1.87312 6.32906 1.10156 7.5C1.87219 8.67 4.19906 11.7188 7.5 11.7188C10.8 11.7188 13.1269 8.67094 13.8984 7.5C13.1278 6.33 10.8009 3.28125 7.5 3.28125ZM7.5 4.21875C8.37024 4.21875 9.20484 4.56445 9.82019 5.17981C10.4355 5.79516 10.7812 6.62976 10.7812 7.5C10.7812 8.37024 10.4355 9.20484 9.82019 9.82019C9.20484 10.4355 8.37024 10.7812 7.5 10.7812C6.62976 10.7812 5.79516 10.4355 5.17981 9.82019C4.56445 9.20484 4.21875 8.37024 4.21875 7.5C4.21875 6.62976 4.56445 5.79516 5.17981 5.17981C5.79516 4.56445 6.62976 4.21875 7.5 4.21875ZM7.5 5.15625C6.87863 5.15699 6.28292 5.40416 5.84354 5.84354C5.40416 6.28292 5.15699 6.87863 5.15625 7.5C5.15625 8.79187 6.20719 9.84375 7.5 9.84375C8.79281 9.84375 9.84375 8.79187 9.84375 7.5C9.84375 6.20812 8.79281 5.15625 7.5 5.15625Z"
              fill="white"
            />
          </svg>
          <span>{t("common.view", { ns: "common" })}</span>
        </button>
      </div>
    </div>
  );
};

export default MarketingMiniPost;
