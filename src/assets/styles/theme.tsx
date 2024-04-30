import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

//not sure if every style works

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          height: "2rem",
          color: "#fefefe",
          backgroundColor: "#00799B",
          borderRadius: 7,
          padding: "0rem 1.5rem",
          fontFamily: 'Roboto-Regular, sans-serif',
          fontSize: "1rem",
          fontWeight: 400,
          "&:hover": {
            backgroundColor: "#134E5F",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          },
        },
        contained: {
          padding: "0.5rem 1.5rem",
          boxShadow: "none",
        },
        containedPrimary: {
          "& .MuiButton-label": {
            color: "#ffffff",
          },
        },
        containedSecondary: {
          "& .MuiButton-label": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            height: "2.0625rem",
            borderColor: "#5C6268",
            borderRadius: 7,
            fontFamily: 'Roboto-Regular, sans-serif',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "0.25rem 0.75rem",
          border: "1px solid #e8e7e7",
          fontFamily: 'Roboto-Regular, sans-serif',
          fontSize: "0.8rem",
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.03)",
        },
        underline: {
          "&:after": {
            borderBottom: "none",
          },
          "&:before": {
            borderBottom: "none",
          },
          "&:hover:not($disabled):before": {
            borderBottom: "none",
            "@media (hover: none)": {
              borderBottom: "none",
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#01ada9",
    },
    secondary: {
      main: "#485c6e",
    },
    text: {
      primary: "#1b2024",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#094469",
      paper: "#ffffff",
    },
    facebook: {
      main: "#3b5998",
      dark: "#314A7E",
      light: "#4568B2",
    },
    linkedin: {
      main: "#2876b4",
      dark: "#226397",
      light: "#2F89D1",
    },
  },
  button: {
    submit: "#01ada9",
    facebook: "#3b5998",
    linkedin: "#2876b4",
  },
  text: {
    secondary: "#485c6e",
  },
  input: {
    borderColor: "#e8e7e7",
    placeholderColor: "#6c767e",
    backgroundColor: "#f7f7f7",
  },
});

export default theme;
