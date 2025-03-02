import React from "react";
import Layout from "../app/layout";
import "../styles/globals.css"; // Ensure you have Tailwind CSS setup

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
