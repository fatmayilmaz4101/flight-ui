import type { Metadata } from "next";
import "./globals.css";
import { LayoutProvider } from "@/layout/context/layoutcontext";
import Layout from "@/layout/layout";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "Flight",
};
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          id="theme-css"
          href={`/themes/lara-light-indigo/theme.css`}
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <PrimeReactProvider>
          <LayoutProvider>
            <Layout>{children}</Layout>
          </LayoutProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
