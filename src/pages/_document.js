import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
