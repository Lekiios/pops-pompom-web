import Head from "next/head";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export const style: StyleSheet = {
  text: {
    fontSize: "100px",
    fontStyle: "italic",
  },
};

interface IMusicProps {
  lien: String;
  nom: String;
  personne: String;
  date: String;
  vote: number;
  description: String;
}

function Music({ lien, nom, personne, date, vote, description }: IMusicProps) {
  return (
    <div>
      <a href={lien}>
        <h4>{nom}</h4>
      </a>
      <p></p>
    </div>
  );
}

let mus1 = [
  "https://www.youtube.com/watch?v=VrY39ooSKBY",
  "Alejandro - Lady Gaga",
  "Maxime",
  "15-03-2023",
  2,
  "Ce serait très stylé",
];

let musicList = [mus1];

export default function Musique() {
  const [listeMusique, setListeMusique] = useState(musicList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />à
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="musiqueMain">
        <div className="musiqueListe">
          {listeMusique.map((item) => (
            <ListItem key={item.key}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </ListItem>
          ))}
        </div>
        <div className="musiqueDroite">
          <div className="musiqueDroiteBouton"></div>
          <div className="musiqueDroiteListe"></div>
        </div>
      </div>
    </div>
  );
}
