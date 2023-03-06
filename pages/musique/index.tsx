import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export const style: StyleSheet = {
  text: {
    fontSize: "100px",
    fontStyle: "italic",
  },
};

export default function Gallerie() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />à
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b style={style.text}>LA</b> Musique
        </h1>
      </main>
    </div>
  );
}
