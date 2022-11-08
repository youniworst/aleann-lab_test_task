import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => (
  <Html>
    <Head>
      <link
        href="http://fonts.cdnfonts.com/css/proxima-nova-2"
        rel="stylesheet"
      />
      <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
