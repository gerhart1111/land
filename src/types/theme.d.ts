import {
  Palette,
  PaletteColor,
  PaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";

interface CustomButtonPalette {
  submit?: string;
  facebook?: string;
  linkedin?: string;
}

interface CustomTextPalette {
  secondary?: string;
}

interface InputPalette {
  borderColor?: string;
  placeholderColor?: string;
  backgroundColor?: string;
}

declare module "@mui/material/styles" {
  // Extend the Palette and PaletteOptions interface
  interface Palette {
    facebook?: PaletteColor;
    linkedin?: PaletteColor;
  }

  interface PaletteOptions {
    facebook?: PaletteColorOptions;
    linkedin?: PaletteColorOptions;
  }

  // Directly extend the ThemeOptions interface for custom fields
  interface ThemeOptions {
    button?: CustomButtonPalette;
    text?: CustomTextPalette;
    input?: InputPalette;
  }
}

interface language {
  value: string;
  name: string;
  direction: string;
}
