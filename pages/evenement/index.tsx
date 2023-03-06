import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [nom, setNom] = useState<string>("Maxime");
  const [date, setDate] = useState<string>(
    new Date("2023-04-25").getFullYear().toString() +
      new Date("2023-04-25").getDate().toString() +
      new Date("2023-04-25").getMonth().toString()
  );
  const [heure, setHeure] = useState<string>("16h-18h");
  const [lieu, setLieu] = useState<string>("Opéra Longjumeau");
  const [going, setGoing] = useState(false);
  const evenementDate = new Date("2023-04-25");
  useEffect(() => {
    setDate(
      evenementDate.getFullYear().toString() +
        evenementDate.getDate().toString() +
        evenementDate.getMonth().toString()
    );
  }, [
    evenementDate.getFullYear().toString() +
      evenementDate.getDate().toString() +
      evenementDate.getMonth().toString(),
  ]);
  return (
    <div>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="evenementMain">
        <div className="evenementHaut">
          <div className="evenementHautDetails">
            <div className="evenementHautDetailsNom">{nom}</div>
            <div className="evenementHautDetailsDate">{date}</div>
            <div className="evenementHautDetailsHeure">{heure}</div>
            <div className="evenementHautDetailsLieu">{lieu}</div>
          </div>
          <div className="evenementHautBouton">
            <button
              onClick={() => setGoing(!going)}
              className="evenementHautBoutonTexte"
            >
              {going ? "J'y vais !" : " Je n'y vais pas !"}
            </button>
          </div>
        </div>
        <div className="evenementBas">
          <div className="evenementBasDescription">Exemple de description</div>
          <div className="evenementBasPhoto">Exemple de photo</div>
        </div>
      </main>
    </div>
  );
}
