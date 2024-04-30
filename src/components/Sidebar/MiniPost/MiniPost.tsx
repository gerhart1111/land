"use client";
import EventMiniPost from "./EventMiniPost/EventMiniPost";
import MarketingMiniPost from "./MarketingMiniPost/MarketingMiniPost";
import styles from "./MiniPost.module.scss";
import PollMiniPost from "./PollMiniPost/PollMiniPost";
import { useTranslation } from "@/app/i18n/client";
import legal from "@/assets/images/legal.jpg";
import help from "@/assets/images/help.jpg";
import license from "@/assets/images/license.jpg";

interface MiniPostProps {
  lng: string;
}

const MiniPost = ({ lng }: MiniPostProps) => {
  const { t } = useTranslation(lng, "sidebar", MiniPost);

  let description1 = t("sidebar.eventminipollpost.description");
  let description2 = t("sidebar.eventminipollpost.description2");
  let description3 = t("sidebar.eventminipollpost.description3");

  return (
    <div className={styles.root}>
      <MarketingMiniPost lng={lng}></MarketingMiniPost>
      <PollMiniPost lng={lng}></PollMiniPost>
      <EventMiniPost
        lng={lng}
        description={description1}
        titlePost={t("sidebar.eventminipollpost.title")}
        img={legal}
      />
      <EventMiniPost
        lng={lng}
        description={description2}
        titlePost={t("sidebar.eventminipollpost.title2")}
        img={help}
      />
      <EventMiniPost
        lng={lng}
        description={description3}
        titlePost={t("sidebar.eventminipollpost.title3")}
        img={license}
      />
    </div>
  );
};

export default MiniPost;
