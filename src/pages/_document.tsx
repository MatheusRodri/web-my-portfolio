import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component to augment the application's <html> and <body> tags
 */
export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <title>Tech Matheus</title>
        {/* Modern meta tags and favicon links would go here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
