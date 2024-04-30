"use client";
import styles from "./Post.module.scss";
import logo from "../../assets/images/logo2.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

const Post = ({ lng }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation(lng, ["post", "common"], Post);

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncateContent = (content: string, maxLength = 140) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength);
  };

  //content for test
  const postContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio corrupti assumenda consectetur perferendis iste in sequi enim ab iure vero ipsum neque cupiditate dolorem veritatis quas, odit non distinctio!";

  // image for test
  const image =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

  return (
    <div className={styles.container}>
      <div className={styles.container__cardHeader}>
        <div className={styles.container__cardHeader__avatar}>
          <Image
            width={65}
            height={65}
            src={logo}
            alt="logo"
            className={styles.container__cardHeader__avatar__image}
          />
          <div className={styles.container__cardHeader__avatar__text}>
            <span className={styles.container__cardHeader__avatar__text__brand}>
              AlterHelp
            </span>
            <span className={styles.container__cardHeader__avatar__text__title}>
              {t("common.landing.logo-title", { ns: "common" })}
            </span>
          </div>
        </div>
        <div className={styles.container__cardHeader__menu}>
          <IconButton size="small">
            <MoreVertIcon style={{ color: "#00799B" }} fontSize="medium" />
          </IconButton>
        </div>
      </div>
      <div className={styles.container__cardMain}>
        <div className={styles.container__postTitle}>{t("post.exit")}</div>
        <div className={styles.container__postContent}>
          {isExpanded ? postContent : truncateContent(postContent)}
          {postContent.length > 140 && (
            <span onClick={handleToggleContent} className={styles.readMore}>
              {isExpanded
                ? t("common.show-less", { ns: "common" })
                : t("common.show-more", { ns: "common" })}
            </span>
          )}
        </div>
        <div className={styles.container__postImage}>
          <Image width={768} height={478} src={image} alt="img" />
        </div>
      </div>
      <div className={styles.container__cardFooter}>
        <Button className={styles.button__view}>
          <VisibilityOutlinedIcon />
          <span>{t("common.view", { ns: "common" })}</span>
        </Button>
        <Button className={styles.button__share}>
          <ShareIcon /> <span>{t("common.share", { ns: "common" })}</span>
        </Button>
        <Link href={`/${lng}/contentpage/123123124`}>
          <Button className={styles.button__share}>
            <ShareIcon />
            <span>{t("common.show.full.article", { ns: "common" })}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
