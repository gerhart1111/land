"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import ThemeRegistry from "@/app/[lng]/ThemeRegistry";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
              <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
          </NextThemesProvider>
}
