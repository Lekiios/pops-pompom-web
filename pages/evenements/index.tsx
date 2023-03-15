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

export default function Evenements() {
  return (
    <div>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="evenementsMain">
        <div className="evenementsInternes">
          <h2>Liste des évènements internes à venir</h2>
          <div className="evenementsInternesImages">
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 1
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 2
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 3
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 4
            </a>
          </div>
        </div>
        <div className="evenementsExternes">
          <h2>Liste des évènements externes à venir</h2>
          <div className="evenementsExternesImages">
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 1
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 2
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 3
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 4
            </a>
          </div>
        </div>
        <div className="evenementsPasses">
          <h2>Liste des évènements passés</h2>
          <div className="evenementsPassesImages">
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 1
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 2
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 3
            </a>
            <a className="evenementsImagesExemple" href="./evenement">
              Exemple 4
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
