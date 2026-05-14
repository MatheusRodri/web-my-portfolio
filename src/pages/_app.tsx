import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";
import Head from "next/head";

/**
 * Root Application Component
 * Wraps the entire app with LanguageProvider for global i18n support
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>Tech Matheus | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Global Header persistent across all pages */}
      <Header />
      
      {/* Main page content */}
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
