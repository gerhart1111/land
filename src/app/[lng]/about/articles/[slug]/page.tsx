"use client";
import { useTranslation } from "@/app/i18n/client";
import TextPost from "@/components/Post/TextPost/TextPost";
import React from "react";

interface ArticlesProps {
  params: {
    lng: string;
  };
}

interface TextProps {
  lng: string;
  contentKey: string[];
}

const DropdownMenuContent: React.FC<TextProps> = ({ lng, contentKey }) => {
  const { t } = useTranslation(lng, "faq", DropdownMenuContent);

  if (contentKey.some((key) => /^text1-|^text2-/.test(key))) {
    return (
      <ul>
        {contentKey.map((contKey, index) => (
          <React.Fragment key={index}>
            {contKey === "text1-1" ? (
              <strong>{t(`faq.${contKey}`, { ns: "faq" })}</strong>
            ) : (
              <li key={index}>{t(`faq.${contKey}`, { ns: "faq" })}</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    );
  }

  return (
    <div>
      {contentKey &&
        contentKey.map((contKey, index) => {
          return <p key={index}>{t(`faq.${contKey}`, { ns: "faq" })}</p>;
        })}
    </div>
  );
};
const ArticlePage = ({ params }: ArticlesProps) => {
  const { lng } = params;
  return (
    <>
      <TextPost lng={lng} text="1" title="" subtitle="" />
    </>
  );
};

export default ArticlePage;
