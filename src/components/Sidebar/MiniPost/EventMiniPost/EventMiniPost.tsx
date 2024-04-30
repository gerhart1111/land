"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import styles from "./EventMiniPost.module.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  description: string;
  lng: string;
  titlePost: string;
  img: StaticImageData;
}

const MarketingMiniPost = ({ lng, description, titlePost, img }: Props) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [fullDescription, setFullDescription] = useState(false);
  const { t } = useTranslation(lng, ["sidebar", "common"], MarketingMiniPost);

  useLayoutEffect(() => {
    if (descriptionRef.current !== null) {
      const element = descriptionRef.current;
      const lines = element.scrollHeight > element.clientHeight;
      setShowMoreButton(lines);
    }
  }, [descriptionRef]);

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.title}>{titlePost}</div>
        <div className={styles.dateAndLocation}>
          {t("sidebar.eventminipollpost.hours")}
        </div>
      </div>
      <div className={styles.description}>
        <div
          className={!fullDescription ? styles.descriptionLimit : ""}
          ref={descriptionRef}
        >
          {description}
        </div>
        {showMoreButton && (
          <span
            className={styles.showMoreButton}
            onClick={() => {
              setFullDescription((fullDescription) => !fullDescription);
              setShowMoreButton((showMoreButton) => !showMoreButton);
            }}
          >
            {t("common.show-more", { ns: "common" })}
          </span>
        )}
      </div>
      <Image
        width={250}
        height={250}
        className={styles.img}
        src={img}
        alt="img"
      />
      <div className={styles.sectionButtons}>
        <button className={styles.viewButton}>
          <RemoveRedEyeIcon fontSize="small" />
          {t("common.view", { ns: "common" })}
        </button>
        <button className={styles.registerButton}>
          <BorderColorIcon fontSize="small" />
          {t("sidebar.register")}
        </button>
      </div>
    </div>
  );
};

export default MarketingMiniPost;
