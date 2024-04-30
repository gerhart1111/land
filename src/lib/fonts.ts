import {
  Inter as FontMono,
  Roboto as FontSans,
} from "next/font/google"

 
export const inter = FontMono({ 
  subsets: ['latin'], 
  variable: "--font-mono"
 });

export const roboto = FontSans({ 
  subsets: ['latin'], 
  weight: "500", 
  variable: "--font-sans"
 });