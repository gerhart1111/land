"use client"
// import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import ReduxProvider from "@/features/redux/ReduxProvider"
import i18n from "@/utils/i18n"
import { I18nextProvider } from "react-i18next"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <ReduxProvider>  {/* Hydration error after redux connection */}
          {/* <Toaster /> */}
          {children}
      </ReduxProvider>
    </ThemeProvider>

  )
}
