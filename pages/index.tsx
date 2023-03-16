import styles from "../styles/Home.module.css";
import React from "react";
import { Button, Flex } from "@mantine/core";
import { Layout } from "../components/Layout";
import { style } from "./gallerie";
import { getUserData } from "../lib/dbUtils";

export default function Home() {
  return (
    <Layout underConstruct>
      <Flex
        justify={"center"}
        align={"center"}
        style={{ height: "100%" }}
        direction={"column"}
      >
        <h1 className={styles.title}>
          Welcome to <b style={style.text}>LE</b> Accueil
        </h1>
      </Flex>
    </Layout>
  );
}
/*
<a href={"/gallerie"}>
<button>Go à la gallerie</button>
</a>
*/
