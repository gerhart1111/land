import { Theme as MuiTheme } from "@mui/material/styles";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const value: any;
  export default value;
}
