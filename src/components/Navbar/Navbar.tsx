"use client";

import { MutableRefObject, Suspense, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Autocomplete, Button, InputAdornment, TextField } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../assets/images/logo2.svg";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import LoginForm from "./LoginForm/LoginForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import LanguageSelector from "./LanguageSelector";
import { language } from "../../types/theme";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/app/[lng]/loader";
import { useTranslation } from "@/app/i18n/client";
import { CircleFlag } from "react-circle-flags";
import { mapLanguageToCountryCode } from "./LanguageSelector/countryCodeMapper";
import Navigation from "../Navigation";

interface NavbarProps {
  lng: any;
  languages: language[];
}

const Navbar = ({ lng, languages }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [showLangSelector, setShowLangSelector] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const isMobileFormat = useMediaQuery("(max-width: 959px)");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { t } = useTranslation(lng, ["navbar", "common"], Navbar);

  const isRegistrationOrSignIn =
    pathname &&
    [`/${lng}/account/CreateAccount`, `/${lng}/account/login`].includes(
      pathname
    );

  const handleOpenAndCloseSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleRedirect = (query: string) => {
    router.replace(query);
  };

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {menuOpen && <Navigation languages={languages} lng={lng}/>}
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <Link href={`/${lng}`}>
              <div className={styles.logo}>
                <Image src={logo} alt="logo" className={styles.logoImage} />
                  <div className={styles.logoText}>
                    <span className={styles.logoBrand}>AlterHelp</span>
                    <span className={styles.logoTitle}>
                      {t("common.landing.logo-title", { ns: "common" })}
                    </span>
                  </div>
              </div>
            </Link>
          </div>

          {!isMobileFormat ? (
            <div className={styles.navbarButtonWrapper}>
              {!isRegistrationOrSignIn && (
                <>
                  <Link href={`/${lng}/account/CreateAccount`}>
                    <Button>
                      <PersonAddOutlinedIcon />
                      {t("navbar.create-account")}
                    </Button>
                  </Link>
                  <Link href={`/${lng}/account/login`}>
                    <Button>
                      <LoginIcon />
                      {t("navbar.sign-in")}
                    </Button>
                  </Link>
                </>
              )}

              {showLangSelector && (
                <LanguageSelector
                  lng={lng}
                  languages={languages}
                  setShowMobileLangSelector={setShowLangSelector}
                  isDesktop={!isMobileFormat}
                />
              )}
              <IconButton onClick={() => setShowLangSelector(true)}>
                <CircleFlag
                  countryCode={mapLanguageToCountryCode(lng)}
                  height="40"
                />
              </IconButton>
            </div>
          ) : (
            <>
              {!menuOpen ? 
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon style={{ color: "#485C6E" }} />
              </IconButton> : 
              <IconButton onClick={handleMenuOpen}>
                <CloseIcon style={{ color: "#485C6E" }} />
              </IconButton>}
            </>
          )}
        </div>
      </div>
      {isMobileFormat && (
        <div>
          {isSearchOpen ? (
            <div className={styles.mobileSearchButtons}>
              <Button>{t("common.search", { ns: "common" })}</Button>
              <Button onClick={() => setIsSearchOpen(false)}>
                {t("common.cancel", { ns: "common" })}
              </Button>
            </div>
          ) : (
            <div className={styles.mobileAccountButtons}>
              {!isRegistrationOrSignIn && (
                <>
                  <Button
                    onClick={() =>
                      handleRedirect(`/${lng}/account/CreateAccount`)
                    }
                  >
                    <PersonAddOutlinedIcon />
                    <span>{t("navbar.create-account")}</span>
                  </Button>
                  <Button
                    onClick={() => handleRedirect(`/${lng}/account/login`)}
                  >
                    <LoginIcon />
                    <span>{t("navbar.sign-in")}</span>
                  </Button>
                </>
              )}
              {pathname === `/${lng}/account/login` && (
                <Button
                  onClick={() =>
                    handleRedirect(`/${lng}/account/CreateAccount`)
                  }
                >
                  <PersonAddOutlinedIcon />
                  <span>{t("navbar.create-account")}</span>
                </Button>
              )}
              {pathname === `/${lng}/account/CreateAccount` && (
                <Button onClick={() => handleRedirect(`/${lng}/account/login`)}>
                  <LoginIcon />
                  <span>{t("navbar.sign-in")}</span>
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
