import Head from "next/head";
import styles from "../styles/Home.module.css";
import { style } from "./gallerie";
import React from "react";
import { Button, Flex } from "@mantine/core";
export default function Home() {
  return (
    <Flex mih={"100%"}>
      <Head>
        <title>Pompom4Ever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        miw={"100%"}
      >
        <h1 className={styles.title}>
          Welcome to <b style={style.text}>LE</b> Accueil
        </h1>
      </Flex>
    </Flex>
  );
}
/*
<a href={"/gallerie"}>
<button>Go à la gallerie</button>
</a>
*/
