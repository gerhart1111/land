"use client";
import React from "react";
import { articles } from "@/lib/articles";
import TextPost from "@/components/Post/TextPost/TextPost";
import { useTranslation } from "@/app/i18n/client";
import styles from "../About.module.scss";

interface ArticlesPageProps {
  lng: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "post", ArticlesPage);
  return (
    <>
      {articles &&
        articles.map((article, index) => (
          <div
            key={index}
            id={t(article.slug, { ns: article.translateNS })}
            className={styles.about__container}
          >
            <TextPost
              lng={lng}
              categories={article.categories}
              title={article.title}
              subtitle={article.subtitle}
              feed={article.feed}
              ns={article.translateNS}
              likes={article.likes}
            />
          </div>
        ))}
    </>
  );
};

export default ArticlesPage;
