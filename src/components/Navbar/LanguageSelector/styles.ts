import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles<Theme>((theme) => {
  return {
    inputRoot: {
      paddingLeft: 0,
      borderColor: theme.palette.background.paper,
      boxShadow: "none",
    },

    listbox: {
      fontFamily: "Roboto-Light, Arial, sans-serif",
      fontSize: "0.8rem",
      padding: 0,
      borderRadius: 4,

      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },

      "&::-webkit-scrollbar": {
        display: "none",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    },

    option: {
      padding: "3px 5px",
    },
    input: {
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "1rem",
      color: theme.palette.secondary.main,
      userSelect: "none",
      mozUserSelect: "none",
      webkitUserSelect: "none",
    },
    popper: {
      width: "fit-content !important",
      minWidth: "112px",
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
        right: 0,
      },
    },
    languageInput: {
      fontSize: "0.9rem",
      color: "#485c6e",
      padding: "7px 14px",
    },
  };
});
