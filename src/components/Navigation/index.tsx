"use client";
import { ChevronLeft, LiveHelp } from "@mui/icons-material";
import React, { useState, useEffect, Suspense } from "react";
import styles from "./Navigation.module.scss";
import clsx from "clsx";
import InputBase from "@mui/material/InputBase";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getRoutes, gradient } from "./constants";
import Link from "next/link";
import { match } from "node-match-path";
import LanguageSelector from "../Navbar/LanguageSelector";
import { language } from "../../types/theme";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { CircleFlag } from "react-circle-flags";
import { mapLanguageToCountryCode } from "../Navbar/LanguageSelector/countryCodeMapper";

const Navigation = ({
  lng,
  languages,
}: {
  lng: any;
  languages: language[];
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<language | undefined>({
    value: "en",
    name: "English",
    direction: "ltr",
  });
  const [showLangSelector, setShowLangSelector] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>("");
  const isMobileFormat = useMediaQuery("(max-width: 959px)");

  const localStorageLanguage =
    typeof window !== "undefined" && localStorage.getItem("language");

  const { t } = useTranslation(lng, "navigation", Navigation);

  const path = usePathname();
  const routes = getRoutes(lng);

  const currentRoute = path && routes.find((r) => match(r.path, path).matches);
  const menu: any = typeof currentRoute !== "string" && currentRoute?.menu;

  const isHelpCenter =
    path.includes(`/${lng}/help/personal`) ||
    path.includes(`/${lng}/help/business`);

  useEffect(() => {
    if (languages) {
      setCurrentLanguage(languages.find((l) => l.value === lng));
    }
  }, [languages, lng]);

  useEffect(() => {
    setActiveLink(path);
  }, [path]);

  useEffect(() => {
    if (showLangSelector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLangSelector]);

  return (
    <div
      className={
        !isMobileFormat
          ? styles.navigation
          : `${styles.navigationMobile} ${styles.active}`
      }
    >
      {menu?.backRoute && (
        <Link className={styles.back} href={`/${lng}${menu.backRoute}`}>
          <ChevronLeft />
          {t("navigation.constants.home")}
        </Link>
      )}
      {isMobileFormat ? (
        <div className={styles.link}>
          {menu?.links.map((link: any, i: number) => (
            <Link
              href={`/${lng}${link.href}`}
              key={i}
              className={
                link.href === "/" || `/${lng}${link.href}` === activeLink
                  ? clsx(styles.menuItem, styles.menuItemActive)
                  : styles.menuItem
              }
            >
              {link.href === "/" || `/${lng}${link.href}` === activeLink ? (
                <div className={styles.activeIcon}>{link.activeIcon}</div>
              ) : (
                link.icon
              )}
              {`${link.title}`}
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.links}>
          {menu?.links.map((link: any, i: number) => (
            <Link
              href={`/${lng}${link.href}`}
              key={i}
              className={
                link.href === "/" || `/${lng}${link.href}` === activeLink
                  ? clsx(styles.menuItem, styles.menuItemActive)
                  : styles.menuItem
              }
            >
              {link.href === "/" || `/${lng}${link.href}` === activeLink ? (
                <div className={styles.activeIcon}>{link.activeIcon}</div>
              ) : (
                link.icon
              )}
              {`${link.title}`}
            </Link>
          ))}
        </div>
      )}
      <div className={styles.footer}>
        <div className={styles.footerMainItems}>
          <Link
            className={
              isHelpCenter || path === `/${lng}/help`
                ? clsx(styles.footerItem, styles.footerItemActive)
                : styles.footerItem
            }
            href={`/${lng}/help`}
          >
            {isHelpCenter || path === `/${lng}/help` ? (
              <div>
                {gradient}
                <LiveHelp style={{ fill: "url(#linearColors)" }} />
              </div>
            ) : (
              <LiveHelp />
            )}
            {t("navigation.help-support")}
          </Link>
          {showLangSelector && (
            <LanguageSelector
              lng={lng}
              languages={languages}
              setShowMobileLangSelector={setShowLangSelector}
              isDesktop={!isMobileFormat}
            />
          )}
          <div className={styles.footerItem}>
            <CircleFlag
              countryCode={mapLanguageToCountryCode(lng)}
              height="40"
            />
            <div
              className={styles.languageCursor}
              onClick={() => setShowLangSelector(true)}
            >
              {currentLanguage?.name}
            </div>
          </div>
        </div>
        <div className={styles.footerBottomItems}>
          <div className={styles.footerItem}>
            <Link href={`/${lng}/terms`}>{t("navigation.terms")}</Link>
            &nbsp;&middot;&nbsp;
            <Link href={`/${lng}/privacy`}>{t("navigation.privacy")}</Link>
          </div>
          <div className={styles.footerItem}>
            <span>AlterHelp</span> &nbsp;&copy;&nbsp;{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
