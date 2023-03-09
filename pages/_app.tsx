import "../styles/globals.css";
import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import React from "react";
import { Flex, MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Flex direction={"column"} style={{ height: "100%" }}>
        <Navbar />
        <Component {...pageProps} />
      </Flex>
    </MantineProvider>
  );
}
