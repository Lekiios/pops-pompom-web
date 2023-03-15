import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import React, { CSSProperties } from "react";
import { Button } from "@mantine/core";

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
  let varDate = new Date("2023-03-25");
  let stringMonth =
    (varDate.getMonth().toString().length == 1 ? "0" : "") +
    (varDate.getMonth() + 1).toString();
  let stringDate =
    (varDate.getDate().toString().length == 1 ? "0" : "") +
    varDate.getDate().toString();
  const [nom, setNom] = useState<string>(
    "RDD 2023, sur Free From fait l'avion"
  );
  const [date, setDate] = useState<string>(
    stringDate + "-" + stringMonth + "-" + varDate.getFullYear().toString()
  );
  const [heure, setHeure] = useState<string>("16h-18h");
  const [lieu, setLieu] = useState<string>("Opéra Longjumeau");
  const [going, setGoing] = useState(false);
  const [description, setDescription] = useState("Exemple description");
  const [meteo, setMeteo] = useState(
    "Annoncé pluvieux, mais on est en intérieur"
  );
  const [chorees, setChorees] = useState(
    "Make U Move, Helikopter, chorée Tigresses et chorée 1/chorée Derby"
  );
  const [materiel, setMateriel] = useState(
    "Tenue complète, chaussures d'intérieur, noires de préférence, un des tapis mince, les pompons"
  );
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
            <div className="evenementHautDetailsBas">
              <div className="evenementHautDetailsBasDate">{date}</div>
              <div className="evenementHautDetailsBasHeure">{heure}</div>
              <div className="evenementHautDetailsBasLieu">{lieu}</div>
            </div>
          </div>
          <div className="evenementHautBouton">
            <Button
              miw={"120px"}
              type="submit"
              variant={"gradient"}
              gradient={{ from: "red", to: "blue", deg: 90 }}
              onClick={() => setGoing(!going)}
            >
              {going ? "J'y vais" : "J'y vais pas"}
            </Button>
          </div>
        </div>
        <div className="evenementBas">
          <div className="evenementBasAutre">
            <div className="evenementBasAutreDescription">
              Description :<h5>{description}</h5>
            </div>
            <div className="evenementBasAutreMateriel">
              Matériel à prendre :<h5>{materiel}</h5>
            </div>
            <div className="evenementBasAutreChoree">
              Chorée(s) à préparer :<h5>{chorees}</h5>
            </div>
            <div className="evenementBasAutreMeteo">
              Météo :<h5>{meteo}</h5>
            </div>
          </div>
          <a href="./gallerieEvenement">
            <div className="evenementBasPhoto">Photos du lieu</div>
          </a>
        </div>
      </main>
    </div>
  );
}
