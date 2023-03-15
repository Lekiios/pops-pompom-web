import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider>
        <Head>
          <title>Pompom4Ever</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}
