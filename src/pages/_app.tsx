import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Root Application Component
 * Wraps the entire app with LanguageProvider for global i18n support
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      {/* Global Header persistent across all pages */}
      <Header />
      
      {/* Main page content */}
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
