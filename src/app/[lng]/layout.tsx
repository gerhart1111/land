import type { Metadata } from "next";
import { inter, roboto } from "@/lib/fonts";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/components/providers";
import "@/assets/styles/global.scss";
import Navigation from "@/components/Navigation";
import MiniPost from "@/components/Sidebar/MiniPost/MiniPost";

import { dir } from "i18next";
import { languagesPrefixes } from "../i18n/setting";
import Favicon from "./favicon.ico";

export const metadata: Metadata = {
  title: "AlterHelp",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export function generateStaticParams() {
  return languagesPrefixes.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const languages = [
    { value: "en", name: "English", direction: "LTR" },
    { value: "de", name: "Deutsch", direction: "LTR" },
    { value: "ua", name: "Українська", direction: "LTR" },
    { value: "ru", name: "Русский", direction: "LTR" },
  ];

  const { lng } = params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${roboto.variable || inter.variable} antialiased`}>
        <Providers>
          <Navbar lng={lng} languages={languages} />
          <div className={styles.container}>
            <div className={styles.navigation}>
              <Navigation lng={lng} languages={languages} />
            </div>
            <div className={`mainRoute ${styles.mainRoute}`}>{children}</div>
            <aside className={styles.asideHome}>
              <MiniPost lng={lng} />
            </aside>
          </div>
        </Providers>
      </body>
    </html>
  );
}
