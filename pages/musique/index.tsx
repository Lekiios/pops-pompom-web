import Head from "next/head";
import React, { useState } from "react";
import { Flex } from "@mantine/core";
import { Layout } from "../../components/Layout";

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
  lien: string;
  nom: string;
  personne: string;
  date: string;
  vote: number;
  description: string;
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

let mus1: IMusicProps = {
  lien: "https://www.youtube.com/watch?v=VrY39ooSKBY",
  nom: "Alejandro - Lady Gaga",
  personne: "Maxime",
  date: "15-03-2023",
  vote: 2,
  description: "Ce serait très stylé",
};

let musicList = [mus1];

export default function Musique() {
  const [listeMusique, setListeMusique] = useState(musicList);
  return (
    <Layout underConstruct>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />à
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="musiqueMain">
        <div className="musiqueListe">
          {listeMusique.map((item: IMusicProps, key) => (
            <Flex key={key}>
              <h1>{item.nom}</h1>
              <p>{item.description}</p>
            </Flex>
          ))}
        </div>
        <div className="musiqueDroite">
          <div className="musiqueDroiteBouton"></div>
          <div className="musiqueDroiteListe"></div>
        </div>
      </div>
    </Layout>
  );
}
