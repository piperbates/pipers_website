import { Html, Head, Main, NextScript } from 'next/document';
// import { Patrick_Hand } from 'next/font/google';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Temporary font import to fix when the bug is resolved */}
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};