import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import React, { CSSProperties } from "react";
import { Button } from "@mantine/core";
import Link from "next/link";
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

export default function Evenements() {
  return (
    <Layout underConstruct>
      <div className="evenementsInternes">
        <h2>Liste des évènements internes à venir</h2>
        <div className="evenementsInternesImages">
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 1
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 2
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 3
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 4
          </Link>
        </div>
      </div>
      <div className="evenementsExternes">
        <h2>Liste des évènements externes à venir</h2>
        <div className="evenementsExternesImages">
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 1
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 2
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 3
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 4
          </Link>
        </div>
      </div>
      <div className="evenementsPasses">
        <h2>Liste des évènements passés</h2>
        <div className="evenementsPassesImages">
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 1
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 2
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 3
          </Link>
          <Link className="evenementsImagesExemple" href="./evenement">
            Exemple 4
          </Link>
        </div>
      </div>
    </Layout>
  );
}
