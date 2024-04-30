"use client";
import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import localStyles from "./LanguageSelector.module.scss";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";
import CloseIcon from "@material-ui/icons/Close";
import { Clear, Search } from "@mui/icons-material";
import { CircleFlag } from "react-circle-flags";
import i18n from "../../../utils/i18n";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { language } from "@/types/theme";
import { mapLanguageToCountryCode } from "./countryCodeMapper";
import { Trans } from "react-i18next";
import { useCookies } from "react-cookie";
import { cookieName } from "@/app/i18n/setting";

interface LanguageSelectorProps {
  lng: any;
  languages: language[];
  setShowMobileLangSelector: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  isDesktop?: boolean;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  lng,
  languages,
  setShowMobileLangSelector,
  onClose,
  isDesktop,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [cookies, setCookie] = useCookies([cookieName]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<language[]>(languages);
  const [direction, setDirection] = useState(
    localStorage.getItem("direction") || "ltr"
  );

  const theme = useTheme();
  const { t } = useTranslation(lng, "navbar", LanguageSelector);

  useEffect(() => {
    setSearchResults(languages);
  }, [languages]);

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResults(languages);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;
    setSearchValue(value);
    if (!value) {
      setSearchResults(languages);
    } else {
      setSearchResults(
        languages?.filter((language) =>
          language.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    }
  };

  const handleLangChange = (lng: any, language: string) => {
    const newUrl = `${pathname?.replace(lng, language)}`;
    setCookie(cookieName, lng, { path: newUrl });
    router.push(newUrl);

    // i18n.changeLanguage(language);

    // localStorage.setItem('language', language);

    const currentDirection = languages
      ?.find((lang) => lang.value === language)
      ?.direction.toLowerCase();
    if (currentDirection) {
      localStorage.setItem("direction", currentDirection);
      // currentDirection && dispatch(setDirection(currentDirection));
      document
        .getElementsByTagName("html")[0]
        .setAttribute("dir", currentDirection);
    }
  };

  const handleSelectorClose = () => {
    setSearchValue("");
    setSearchResults(languages);
    onClose && onClose();
    setShowMobileLangSelector(false);
  };

  return (
    <div className={localStyles.container}>
      <Box
        sx={{
          width: "802px",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          pr: "16px",
          pl: "16px",
          mr: direction === "rtl" ? "0" : "330px",
          ml: direction === "rtl" ? "330px" : "0",
        }}
      >
        {isDesktop && (
          <Box
            sx={{
              pr: "24px",
              pl: "16px",
              width: "100%",
              maxWidth: "260px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                letterSpacing: "0.86px",
                lineHeight: "30px",
                textAlign: "left",
                color: theme.palette.secondary.main,
                whiteSpace: "nowrap",
              }}
            >
              {t("navbar.select-language.title")}
            </Typography>
            <IconButton
              onClick={() => setShowMobileLangSelector(false)}
              sx={{
                margin: 0,
                padding: "12px",
                position: "absolute",
                right: "16px",
                top: "16px",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            height: "100%",
            width: "536px",
            display: "flex",
            flexDirection: "column",
            padding: "0 70px",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "#e0eff3",
              borderRadius: "32px",
              display: "flex",
              justifyContent: "space-between",
              overflow: "hidden",
              p: "8px 16px",
              mb: 2,
              width: "100%",
              height: 24,
            }}
          >
            <TextField
              variant="standard"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "32px",
                  border: "none",
                  p: "0 8px",
                },
                "& .MuiInputBase-input::placeholder": {
                  opacity: 1,
                  color: "#5C6268",
                },
              }}
              placeholder={t("navbar.select-language.placeholder")}
              type="text"
              value={searchValue}
              onChange={handleSearch}
              onKeyDown={(e) => e.stopPropagation()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {searchValue ? (
                      <Clear
                        sx={{ height: 24, width: 24 }}
                        onClick={handleClearSearch}
                      />
                    ) : (
                      <Search sx={{ height: 24, width: 24 }} />
                    )}
                  </InputAdornment>
                ),
                disableUnderline: true,
                sx: {
                  boxShadow: "none",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              padding: "0 16px",
              height: "75%",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "24px",
                borderRadius: "5px",
                backgroundColor: "#f1f1f1",
              },
              "&::-webkit-scrollbar-track": {
                background: "#ffffff",
                border: `1px solid rgba(72, 92, 110, 0.5)`,
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.text.secondary,
                border: "8px solid transparent",
                backgroundClip: "padding-box",
                borderRadius: "16px",
                height: "72px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#b0b0b0",
                border: "8px solid transparent",
                backgroundClip: "padding-box",
              },
              "&::-webkit-scrollbar-button:decrement": {
                backgroundImage: `url(${arrowUp})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "12px",
                backgroundColor: "#ffffff",
                border: `1px solid rgba(72, 92, 110, 0.5)`,
                borderRadius: "5px 5px 0 0",
                borderBottom: "none",
                height: "20px",
              },
              "&::-webkit-scrollbar-button:increment": {
                backgroundImage: `url(${arrowDown})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "12px",
                backgroundColor: "#ffffff",
                border: `1px solid rgba(19, 78, 95, 0.5)`,
                borderRadius: "0 0 5px 5px",
                borderTop: "none",
                height: "20px",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "darkgrey #f1f1f1",
            }}
          >
            {searchResults.map((item, index) => {
              return (
                <Trans i18nKey="languageSwitcher" t={t} key={index}>
                  <Box
                    key={index}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      outline: 0,
                      boxSizing: "border-box",
                      minHeight: "48px",
                      alignItems: "center",
                      padding: "8px 16px",
                      justifyContent: "flex-start",
                      WebkitTapHighlightColor: "transparent",
                      fontSize: "16px",
                      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      letterSpacing: "0.15008px",
                      ":hover": {
                        backgroundColor: "#f0f0f0",
                        borderRadius: "7px",
                      },
                    }}
                    onClick={() => {
                      handleLangChange(lng, item.value);
                      handleSelectorClose();
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        marginRight: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#EEE",
                        color: "#333",
                        fontSize: "16px",
                        fontFamily:
                          "'Roboto', 'Helvetica', 'Arial', sans-serif",
                      }}
                    >
                      <CircleFlag
                        countryCode={mapLanguageToCountryCode(item.value)}
                        height="40"
                      />
                    </div>
                    <Typography
                      sx={{
                        padding: "10px 16px",
                        borderRadius: "3px",
                        color: "#485C6E",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Trans>
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LanguageSelector;
