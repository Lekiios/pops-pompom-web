import Head from "next/head";
import styles from "../styles/Home.module.css";
import { style } from "./gallerie";
import React from "react";
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pompom4Ever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b style={style.text}>LE</b> Accueil
        </h1>
      </main>
    </div>
  );
}
/*
<a href={"/gallerie"}>
<button>Go à la gallerie</button>
</a>
*/
