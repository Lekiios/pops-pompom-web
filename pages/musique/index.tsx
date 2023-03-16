import Head from "next/head";
import React, { useState } from "react";
import { Flex } from "@mantine/core";
import { Layout } from "../../components/Layout";
import Link from "next/link";

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
interface IMusicChoosenProps {
  lien: string;
  nom: string;
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
  description:
    'Ce serait très stylé, surtout le moment où elle dit "Alejandro", je pense.',
};

let musicList = [mus1, mus1, mus1];

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
            <Flex key={key} className="musiqueListeObjet">
              <Link href={item.lien}>
                <h3 className="musiqueListeObjetTitre">{item.nom}</h3>
              </Link>
              <div className="musiqueListeObjetInfo">
                <div className="musiqueListeObjetInfoQui">
                  Proposée par {item.personne}
                </div>
                <div className="musiqueListeObjetInfoDate">le {item.date}</div>
                <div className="musiqueListeObjetInfoVote">
                  Nombre de vote : {item.vote}
                </div>
              </div>
              <div className="musiqueListeObjetDescription">
                <p>{item.description}</p>
              </div>
            </Flex>
          ))}
        </div>
        <div className="musiqueDroite">
          <div className="musiqueDroiteBouton">
            <button className="musiqueDroiteBoutonStyle">
              Ajouter une musique
            </button>
          </div>
          Liste des musiques des pompoms :
          <div className="musiqueDroiteListe">
            {listeMusique.map((item: IMusicChoosenProps, key) => (
              <Flex key={key} className="musiqueListeObjet">
                <Link href={item.lien}>
                  <h3 className="musiqueListeObjetTitre">{item.nom}</h3>
                </Link>
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
