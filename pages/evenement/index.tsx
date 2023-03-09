import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import React, { CSSProperties } from "react";

export interface StyleSheet {
  [key: string]: CSSProperties;
}

export const style: StyleSheet = {
  text: {
    fontSize: "100px",
    fontStyle: "italic",
  },
};

export default function Evenement() {
  let varDate = new Date("2023-04-25");
  let stringMonth =
    (varDate.getMonth().toString().length == 1 ? "0" : "") +
    varDate.getMonth().toString();
  let stringDate =
    (varDate.getDate().toString().length == 1 ? "0" : "") +
    varDate.getDate().toString();
  const [nom, setNom] = useState<string>("Maxime");
  const [date, setDate] = useState<string>(
    varDate.getFullYear().toString() + "-" + stringDate + "-" + stringMonth
  );
  const [heure, setHeure] = useState<string>("16h-18h");
  const [lieu, setLieu] = useState<string>("Opéra Longjumeau");
  const [going, setGoing] = useState(false);
  const evenementDate =
    varDate.getFullYear().toString() + "-" + stringDate + "-" + stringMonth;
  useEffect(() => {
    setDate(evenementDate);
  }, [evenementDate]);
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
            <button onClick={() => setGoing(!going)}>
              {going ? "J'y vais" : "J'y vais pas"}
            </button>
          </div>
        </div>
        <div className="evenementBas">
          <div className="evenementBasAutre">
            <div className="evenementBasAutreDescription">
              Exemple de description
            </div>
            <div className="evenementBasAutreMateriel">
              Exemple de matériel à prendre
            </div>
            <div className="evenementBasAutreChoree">
              Exemple de chorée(s) à préparer
            </div>
            <div className="evenementBasAutreMeteo">Exemple de Meteo</div>
          </div>
          <div className="evenementBasPhoto">Exemple de photo</div>
        </div>
      </main>
    </div>
  );
}
