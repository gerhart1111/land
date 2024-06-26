import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  optionIcon: {
    padding: 0,
    paddingLeft: "0.5rem",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuItem: {
    fontSize: "0.9rem",
    gap: "10px",
    "&:hover": {
      backgroundColor: "#ddd3d3",
    },
    "@media (max-width:959px)": {
      minHeight: 30,
    },
  },
  menuItemSelect: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
