import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import NextLink from "next/link";
import Impressum from "./impressum/page";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function linkStyles(arg0: { color: string }): clsx.ClassValue {
    throw new Error("Function not implemented.");
  }

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow flex items-center justify-center">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 mt-0 md:mt-5">
              <section className="flex gap-5">
                <NextLink color="foreground" href="/impressum">
                  Impressum
                </NextLink>
                <NextLink color="foreground" href="/privacypolicy">
                  Private Policy
                </NextLink>
              </section>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
