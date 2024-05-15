"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconButton, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import styles from "./Post.module.scss";
import logo from "../../assets/images/logo.svg";
import OptionMenu from "../OptionMenu";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { ContentCopy } from "@mui/icons-material";

interface PostProps {
  key: number;
  lng: string;
  title: string;
  subtitle: string;
  feed: string[];
  slug: string;
  ns: string;
  image: StaticImageData;
}

const Post: React.FC<PostProps> = ({
  key,
  lng,
  title,
  subtitle,
  feed,
  slug,
  ns,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const { t } = useTranslation(
    lng,
    ["post", "postSec", "postThird", "postFourth", "common"],
    Post
  );

  const handleShareClick = () => {
    setIsShareMenuOpen((prev) => !prev);
  };
  const handleShareMoreClick = () => {
    setIsMoreMenuOpen((prev) => !prev);
  };
  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncateContent = (content: string, maxLength = 140) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength);
  };

  const postContent = feed.map((text, index) => {
    if (/post_subtitle\d*/.test(text)) {
      return <h4 key={index}>{t(text, { ns: ns })}</h4>;
    } else if (/post_details\d*/.test(text)) {
      return <p key={index}>{t(text, { ns: ns })}</p>;
    } else {
      return <p key={index}>{t(text, { ns: ns })}</p>;
    }
  });

  const shareOnTelegram = () => {
    const hostName = "http://localhost:3000";
    const url = encodeURIComponent(
      `${hostName}/${lng}/about/articles#${t(slug, { ns: ns })}`
    );
    window.open(`https://t.me/share/url?url=${url}`, "_blank");
  };

  const shareOnFacebook = () => {
    const hostName = "http://localhost:3000";

    const url = encodeURIComponent(
      `${hostName}/${lng}/about/articles#${t(slug, { ns: ns })}`
    );
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    const hostName = "http://localhost:3000";

    const url = encodeURIComponent(
      `${hostName}/${lng}/about/articles#${t(slug, { ns: ns })}`
    );
    window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
  };

  const copyLinkToClipboard = () => {
    const hostName = "http://localhost:3000";
    const url = `${hostName}/${lng}/about/articles#${t(slug, { ns: ns })}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {})
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div className={styles.container} key={key}>
      <div className={styles.container__cardHeader}>
        <div className={styles.container__cardHeader__avatar}>
          <Image width={65} height={65} src={logo} alt="logo" />
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
          <IconButton size="small" onClick={handleShareMoreClick}>
            <MoreVertIcon style={{ color: "#00799B" }} fontSize="medium" />
          </IconButton>
          {isMoreMenuOpen && (
            <OptionMenu
              options={[
                {
                  label: t("common.show.copy", { ns: "common" }),
                  onClick: copyLinkToClipboard,
                  icon: <ContentCopy />,
                },
              ]}
            />
          )}
        </div>
      </div>
      <div className={styles.container__cardMain}>
        <div className={styles.container__postTitle}>
          {t(title, { ns: ns })}
        </div>
        <div className={styles.container__postContent}>
          {isExpanded ? (
            <>
              <article className={styles.container__postTextBlock}>
                {postContent}
              </article>
              <span onClick={handleToggleContent} className={styles.readMore}>
                {t("common.show-less", { ns: "common" })}
              </span>
            </>
          ) : (
            <>
              {truncateContent(
                postContent.map((item) => item.props.children).join("")
              )}
              <span onClick={handleToggleContent} className={styles.readMore}>
                {t("common.show-more", { ns: "common" })}
              </span>
            </>
          )}
        </div>
        <div className={styles.container__postImage}>
          <Image width={768} height={478} src={image} alt="img" />
        </div>
      </div>
      <div className={styles.container__cardFooter}>
        <Link href={`/${lng}/about/articles#${t(slug, { ns: ns })}`}>
          <Button className={styles.button__view}>
            <VisibilityOutlinedIcon />
            <span>{t("common.view", { ns: "common" })}</span>
          </Button>
        </Link>
        <Button className={styles.button__share} onClick={handleShareClick}>
          <ShareIcon /> <span>{t("common.share", { ns: "common" })}</span>
          {isShareMenuOpen && (
            <OptionMenu
              options={[
                {
                  label: t("common.show.share", { ns: "common" }),
                  onClick: shareOnTelegram,
                  icon: <TelegramIcon />,
                },
                {
                  label: t("common.show.share1", { ns: "common" }),
                  onClick: shareOnFacebook,
                  icon: <FacebookIcon />,
                },
                {
                  label: t("common.show.share2", { ns: "common" }),
                  onClick: shareOnTwitter,
                  icon: <XIcon />,
                },
              ]}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Post;
