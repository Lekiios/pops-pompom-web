import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import React, { CSSProperties } from "react";
import { Button } from "@mantine/core";
import { Layout } from "../../components/Layout";

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
  let varDate = new Date("2023-10-25");
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
  const [description, setDescription] = useState(
    "Représentation devant les élèves diplomés ET6 et APP6. Représentation en début de cérémonie (16h-17h) et fin de cérémonie 18h-19h. Présence requise dès le matin (9h) pour les préparations de la salle et les répétitions. Le repas de midi est fourni par l'école, et la journée de cours est excusée."
  );
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
    <Layout underConstruct>
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
              Description :<p>{description}</p>
            </div>
            <div className="evenementBasAutreMateriel">
              Matériel à prendre :<h4>{materiel}</h4>
            </div>
            <div className="evenementBasAutreChoree">
              Chorée(s) à préparer :<h4>{chorees}</h4>
            </div>
            <div className="evenementBasAutreMeteo">
              Météo :<h4>{meteo}</h4>
            </div>
          </div>
          <a href="./gallerieEvenement">
            <div className="evenementBasPhoto">
              <Image
                priority
                src="/remplissageEven2.png"
                width={400}
                height={320}
                alt="theatreDeLongjumeau"
              />
            </div>
          </a>
        </div>
      </main>
    </Layout>
  );
}
