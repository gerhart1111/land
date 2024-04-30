"use client";
import React, { useEffect, useState, useMemo } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteGooglePlaces } from "../../AutocompleteGooglePlaces";
import Button from "@material-ui/core/Button";
import DividerWithText from "../../DividerWithText";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import styles from "./SearchForm.module.scss";
import { useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { selectDirection } from "../../../features/redux/reducers/direction/directionSlice";
import { useDispatch, useSelector } from "react-redux";

var axios = require("axios");
const key = process.env.REACT_APP_GOOGLE_API_KEY_IP;
interface ISearchForm {
  name?: string;
  type?: string;
  locationFilter?: any;
  jobsCount?: number;
  category?: string;
  subcategory?: string;
  lng?: any;
}

const SearchForm: React.FC<ISearchForm> = ({ lng, ...props }: ISearchForm) => {
  const { name, locationFilter, jobsCount, category, subcategory } = props;
  const [searchValue, setSearchValue] = useState("");
  // const [categorySearchValue, setCategorySearchValue] = useState<string>('');
  const [selectedName, setSelectedName] = useState<any>(null);
  // const [selectedType, setSelectedType] = useState<string | null>;
  const [locationValue, setLocationValue] = useState<any>(null);
  const [results, setResults] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isUSA, setisUSA] = useState<boolean>(false);

  const [error, setError] = useState<string>("");
  // const direction = useAppSelector(selectDirection);
  const direction = useSelector(selectDirection);

  const pathname = usePathname();
  const isResultsPage = pathname === "/search-results";
  const { t } = useTranslation(lng, ["searchForm", "common"], SearchForm);

  const formatLocation = (location: any, mode?: any, countryEn?: any) => {
    let userAddress = "";

    if (mode === "default") {
      if (location?.address.includes(",") && !location?.address.includes("،")) {
        const splitAddress = location?.address.split(",");
        if (countryEn === "United States" && location?.city) {
          userAddress += `${splitAddress[splitAddress.length - 3]},`;
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        } else if (location?.city) {
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        }
        if (!location?.city && countryEn === "United States") {
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        }
        userAddress += `${splitAddress[splitAddress.length - 1]}`;
      } else if (
        location?.address.includes("،") &&
        !location?.address.includes(",")
      ) {
        const splitAddress = location?.address.split("،");
        if (countryEn === "United States" && location?.city) {
          userAddress += `${splitAddress[splitAddress.length - 3]},`;
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        } else if (location?.city) {
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        }
        if (!location?.city && countryEn === "United States") {
          userAddress += `${splitAddress[splitAddress.length - 2]},`;
        }
        userAddress += `${splitAddress[splitAddress.length - 1]}`;
      } else if (
        location?.address.includes("،") &&
        location?.address.includes(",")
      ) {
        let splitAddress = location?.address.split("," && "،");
        splitAddress = splitAddress[splitAddress.length - 1];
        userAddress += `${splitAddress}`;
      }
    } else {
      if (location?.address) {
        if (
          !location?.address.includes(",") &&
          !location?.address.includes("،")
        ) {
          userAddress += location?.address;
        } else {
          let countrySplit, stateSplit, citySplit;

          if (location?.address.includes(",")) {
            const splitAddress = location?.address.split(",");
            countrySplit = splitAddress[splitAddress.length - 1];
            if (isUSA === true && location?.city) {
              stateSplit = splitAddress[splitAddress.length - 2];
              citySplit = splitAddress[splitAddress.length - 3];
            } else if (location?.city) {
              citySplit = splitAddress[splitAddress.length - 2];
            }
            if (!location?.city && isUSA === true) {
              stateSplit = splitAddress[splitAddress.length - 2];
            }
          } else if (location?.address.includes("،")) {
            const splitAddress = location?.address.split("،");
            countrySplit = splitAddress[splitAddress.length - 1];
            if (isUSA && location?.city) {
              stateSplit = splitAddress[splitAddress.length - 2];
              citySplit = splitAddress[splitAddress.length - 3];
            } else if (location?.city) {
              citySplit = splitAddress[splitAddress.length - 2];
            }
            if (!location?.city && isUSA) {
              stateSplit = splitAddress[splitAddress.length - 2];
            }
          }
          //userAddress = location?.address;
          if (location?.city) {
            userAddress += `${citySplit}, `;
          }
          if (isUSA === true) {
            //const isUS = location.country === 'United States';

            userAddress += `${stateSplit}, `;
          }
          if (location?.country) {
            userAddress += `${countrySplit}`;
          }
        }
      }
    }

    return userAddress;
  };

  const { control, reset } = useForm({
    defaultValues: useMemo(() => {
      return {
        streetAddress: formatLocation(locationFilter) || "",
      };
    }, [locationFilter]),
    mode: "all",
  });

  async function handleUpdateLocation(newValue: any, mode?: string) {
    const { city, state, country, address, placeId } = newValue;
    if (!(city || state || country || address || placeId)) {
      setLocationValue(null);
    } else {
      var config = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&language=en&sensor=true&key=${key}`,
        headers: {},
      };

      axios(config).then(async function (res: { data: { results: any } }) {
        const results = res.data.results;
        const address_components = await results[0].address_components;
        let countryEn;
        address_components
          .filter((c: any) => c.types[0] === "country")
          .map((c: any) => (countryEn = c.long_name));
        setLocationValue({
          state: countryEn === "United States" ? state : "",
          country,
          address,
          placeId,
          city: city,
          // mode === 'default' ? '' : city,
        });
        if (countryEn === "United States") {
          setisUSA(true);
        }
        // dispatch(updateLocation(newValue));
        setError("");
      });
    }
  }

  useEffect(() => {
    if (locationFilter) {
      handleUpdateLocation(locationFilter);
      reset({
        streetAddress: formatLocation(locationFilter) || "",
      });
    }
  }, [locationFilter]);

  const handleTitleChange = (e: any, option: any) => {
    setSelectedName(option);
    setError("");
    if (option) {
      // setSelectedType(option.nameTokens ? 'job' : 'company');
    }
  };

  const classes = useStyles();

  const submitSearch = () => {
    if (!locationValue) {
      setError(t("searchForm.searchTooGeneral"));
    }
  };

  const headingText = (location: any) => {
    if (location === undefined) return "";

    const _name = subcategory || category;
    const heading = !_name
      ? t("searchForm.jobsIn")
      : `${_name} ${t("searchForm.jobsInSmall")}`;
    return heading + locationText(location);
  };

  const locationText = (location: any) => {
    if (location === undefined) return "";
    const isUSAProfile = localStorage.getItem("isUSAProfile");

    if (
      !location?.address?.includes(",") &&
      !location?.address?.includes("،")
    ) {
      return location?.address;
    } else {
      const { city, country, address } = location;
      let countrySplit, stateSplit, citySplit;
      if (address.includes(",")) {
        const splitAddress = address.split(",");
        countrySplit = splitAddress[splitAddress.length - 1];
        if (city) {
          citySplit = splitAddress[splitAddress.length - 2];
        }
        if (!city && isUSAProfile === "true") {
          stateSplit = splitAddress[splitAddress.length - 2];
        }
        if (isUSAProfile === "true" && city) {
          stateSplit = splitAddress[splitAddress.length - 2];
          citySplit = splitAddress[splitAddress.length - 3];
        }
      } else if (address.includes("،")) {
        const splitAddress = address.split("،");
        countrySplit = splitAddress[splitAddress.length - 1];
        if (city) {
          citySplit = splitAddress[splitAddress.length - 2];
        }
        if (!city && isUSAProfile === "true") {
          stateSplit = splitAddress[splitAddress.length - 2];
        }
        if (isUSAProfile === "true" && city) {
          stateSplit = splitAddress[splitAddress.length - 2];
          citySplit = splitAddress[splitAddress.length - 3];
        }
      }

      if (!city && isUSAProfile === "false" && country) {
        return country;
      } else if (city && isUSAProfile === "false" && country) {
        return `${citySplit}, ${countrySplit}`;
      } else if (city && isUSAProfile === "true" && country) {
        return `${citySplit}, ${stateSplit}, ${countrySplit}`;
      } else if (country && isUSAProfile === "true") {
        return `${stateSplit}, ${countrySplit}`;
      }
    }
  };

  return (
    <div className={styles.form}>
      <span className={styles.formTitle}>{t("searchForm.form.title")}</span>
      <div className={styles.inputs}>
        <Autocomplete
          options={results}
          className={
            direction === "rtl" ? classes.autocompleteRtl : classes.autocomplete
          }
          openOnFocus={false}
          getOptionLabel={(option) => option.name}
          popupIcon={null}
          onChange={handleTitleChange}
          value={selectedName}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                placeholder={t("searchForm.job-or-compnay.name")}
                className={classes.input}
                type="text"
                required
                variant="standard"
                size="small"
                id="jobTitle"
                name="jobTitle"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </>
          )}
        />
        <AutocompleteGooglePlaces
          name="streetAddress"
          className={
            direction === "rtl" ? classes.autocompleteRtl : classes.autocomplete
          }
          placeholder={t("searchForm.location")}
          disablePortal={false}
          control={control}
          // location={location}
          updateLocation={handleUpdateLocation}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.btn}
          onClick={submitSearch}
        >
          <span className={styles.btnTitle}>
            {t("common.search", { ns: "common" })}
          </span>
        </Button>
      </div>
      {error && <span className={styles.error}>{error}</span>}

      <h1 className={styles.heading}>{headingText(locationFilter)}</h1>

      {isResultsPage && (
        <div className={styles.found}>
          <DividerWithText>
            {jobsCount} {t("searchForm.jobsFound")}
          </DividerWithText>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
