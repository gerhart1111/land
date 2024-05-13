"use client";

import { useTranslation } from "@/app/i18n/client";
import React, { useState } from "react";
import styles from "./faqTable.module.scss";

interface Props {
  title: string;
  content: React.ReactNode;
}

interface TableProps {
  lng: string;
}

interface DropdownMenuProps {
  lng: string;
  contentKey: string[];
}

const TableRow = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.bordercontainer}>
      <div className={styles.row} onClick={toggleRow}>
        <h2 className={styles.title}>{title}</h2>
        <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          &#9660;
        </div>
      </div>
      {isOpen && (
        <div
          className={`${styles.dropdowncontent} ${
            isOpen ? styles.open : styles.closed
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const DropdownMenuContent: React.FC<DropdownMenuProps> = ({
  lng,
  contentKey,
}) => {
  const { t } = useTranslation(lng, "faq", DropdownMenuContent);

  if (contentKey.some((key) => /^text1-|^text2-/.test(key))) {
    return (
      <ul className={styles.faq__list}>
        {contentKey.map((contKey, index) => (
          <React.Fragment key={index}>
            {contKey === "text1-1" ? (
              <strong>{t(`faq.${contKey}`, { ns: "faq" })}</strong>
            ) : (
              <li className={styles.faq__list__item} key={index}>
                {t(`faq.${contKey}`, { ns: "faq" })}
              </li>
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
          return (
            <p className={styles.faq__description} key={index}>
              {t(`faq.${contKey}`, { ns: "faq" })}
            </p>
          );
        })}
    </div>
  );
};

const Table = ({ lng }: TableProps) => {
  const { t } = useTranslation(lng, "faq", Table);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className={styles.title}>{t("faq.title", { ns: "faq" })}</h1>
      <TableRow
        title={t("faq.head", { ns: "faq" })}
        content={
          <DropdownMenuContent
            lng={lng}
            contentKey={["text", "text1", "text2", "text3", "text4", "text5"]}
          />
        }
      />
      <TableRow
        title={t("faq.head1", { ns: "faq" })}
        content={
          <DropdownMenuContent
            lng={lng}
            contentKey={[
              "text1-1",
              "text1-2",
              "text1-3",
              "text1-4",
              "text1-5",
              "text1-6",
            ]}
          />
        }
      />
      <TableRow
        title={t("faq.head2", { ns: "faq" })}
        content={
          <DropdownMenuContent
            lng={lng}
            contentKey={["text2-1", "text2-2", "text2-3", "text2-4"]}
          />
        }
      />
      <TableRow
        title={t("faq.head3", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text3-1"]} />}
      />
      <TableRow
        title={t("faq.head4", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text4-1"]} />}
      />
      <TableRow
        title={t("faq.head5", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text5-1"]} />}
      />
      <TableRow
        title={t("faq.head6", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text6-1"]} />}
      />
      <TableRow
        title={t("faq.head7", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text7-1"]} />}
      />
      <TableRow
        title={t("faq.head8", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text8-1"]} />}
      />
      <TableRow
        title={t("faq.head9", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text9-1"]} />}
      />
      <TableRow
        title={t("faq.head10", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text10-1"]} />}
      />
      <TableRow
        title={t("faq.head11", { ns: "faq" })}
        content={<DropdownMenuContent lng={lng} contentKey={["text11-1"]} />}
      />
      <TableRow
        title={t("faq.head12", { ns: "faq" })}
        content={
          <DropdownMenuContent
            lng={lng}
            contentKey={["text12-1", "text12-2"]}
          />
        }
      />
    </div>
  );
};

export default Table;
