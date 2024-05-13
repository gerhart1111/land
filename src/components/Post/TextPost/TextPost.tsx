"use client";
import React from "react";
import styles from "./TextPost.module.scss";

import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
import logo from "../../../assets/images/logo2.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ForumIcon from "@mui/icons-material/Forum";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";

interface TextPostProps {
  lng: string;
  title: string;
  subtitle: string;
  categories: string[];
  feed: string[];
  ns: string;
  likes: number;
}

const TextPost = ({
  lng,
  title,
  subtitle,
  categories,
  feed,
  ns,
  likes,
}: TextPostProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(likes);
  const { t } = useTranslation(
    lng,
    ["post", "postSec", "postThird", "postFourth", "common"],
    TextPost
  );

  const handleLikeCount = () => {
    if (likeCount >= likes) {
      setLikeCount(likes + 1);
    } else {
      setLikeCount((prev) => ++prev);
    }
  };

  const postContent = categories.map((category, index) => {
    if (/post_subtitle\d*/.test(category)) {
      return <h4 key={index}>{t(category, { ns: ns })}</h4>;
    } else if (/post_details\d*/.test(category)) {
      return <p key={index}>{t(category, { ns: ns })}</p>;
    } else {
      return <p key={index}>{t(category, { ns: ns })}</p>;
    }
  });

  return (
    <div className={styles.root}>
      <div className={styles.warpTop}>
        <Image
          width={65}
          height={65}
          src={logo}
          alt="profile_Image"
          className={styles.profileImg}
        />
        <div className={styles.flexColumn}>
          <h1 className={styles.name}>{t(title, { ns: ns })}</h1>
          <h3 className={styles.location}>{t(subtitle, { ns: ns })}</h3>
        </div>
      </div>
      <div className={styles.description}>{postContent}</div>
      <div className={styles.centerDiv}>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.flexRow} ${styles.padding}`}>
        <ThumbUpIcon />
        <div className={styles.likes}>{likeCount}</div>
      </div>
      <div
        className={`${styles.footer}  ${styles.flexRow}  ${styles.centerRow}`}
      >
        <Button className={`${styles.btn} ${styles.view}`}>
          <VisibilityIcon />
          <div>{t("common.view", { ns: "common" })}</div>
        </Button>

        <Button className={styles.btn} onClick={handleLikeCount}>
          <ThumbUpIcon />
          <div>{t("post.like")}</div>
        </Button>

        <Button className={styles.btn}>
          <ForumIcon />
          <div>{t("post.comment")}</div>
        </Button>
      </div>
    </div>
  );
};

export default TextPost;
