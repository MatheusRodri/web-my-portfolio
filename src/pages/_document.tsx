import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component to augment the application's <html> and <body> tags
 */
export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        {/* Favicon and other meta tags go here. Title should be in _app or specific pages. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
