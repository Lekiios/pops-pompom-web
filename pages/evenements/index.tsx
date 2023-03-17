import Image from "next/image";
import { useEffect, useState } from "react";
import React, { CSSProperties } from "react";
import { Button, Flex } from "@mantine/core";
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

interface IEvenementsPassesProps {
  nom: string;
  date: string;
  lieu: string;
  image: string;
  alt: string;
}
let ev1: IEvenementsPassesProps = {
  nom: "Repas de Noël",
  date: "15-05-2023",
  lieu: "Opéra Massy",
  image: "/remplissageEven1.png",
  alt: "pompomDerby",
};
let ev2: IEvenementsPassesProps = {
  nom: "RDD 2023 - Le retour 2",
  date: "15-05-2023",
  lieu: "Opéra Massy",
  image: "/remplissageEven2.png",
  alt: "pompomDerby",
};
let ev3: IEvenementsPassesProps = {
  nom: "Derby, pure dinguerie",
  date: "19-11-2022",
  lieu: "MAPS - Orsay",
  image: "/derby.png",
  alt: "pompomDerby",
};

let eventInterList = [ev1, ev1, ev1, ev1];
let eventExterList = [ev2, ev2, ev2, ev2];
let pastEventList = [ev3, ev3, ev3, ev3];

export default function Evenements() {
  const [listeEvenementsInter, setListeEvenementsInter] =
    useState(eventInterList);
  const [listeEvenementsExter, setListeEvenementsExter] =
    useState(eventExterList);
  const [listeEvenementsPasses, setListeEvenementsPasses] =
    useState(pastEventList);
  return (
    <Layout underConstruct>
      <div className="evenementsInternes">
        <h2>Liste des évènements internes à venir</h2>
        <div className="evenementsInternesImages">
          {listeEvenementsInter.map((item: IEvenementsPassesProps, key) => (
            <Link href={"/evenement"} key={key}>
              <Flex className="evenementsImagesExemple">
                <Image
                  priority
                  src={item.image}
                  width={220}
                  height={160}
                  alt={item.alt}
                />
                <div className="evenementsImagesExempleNom">{item.nom}</div>
                <div className="evenementsImagesExemple2">
                  <div className="evenementsImagesExemple2Date">
                    Le {item.date}
                  </div>
                  <div className="evenementsImagesExemple2Lieu">
                    à {item.lieu}
                  </div>
                </div>
              </Flex>
            </Link>
          ))}
        </div>
      </div>
      <div className="evenementsExternes">
        <h2>Liste des évènements externes à venir</h2>
        <div className="evenementsExternesImages">
          {listeEvenementsExter.map((item: IEvenementsPassesProps, key) => (
            <Link href={"/evenement"} key={key}>
              <Flex className="evenementsImagesExemple">
                <Image
                  priority
                  src={item.image}
                  width={220}
                  height={160}
                  alt={item.alt}
                />
                <div className="evenementsImagesExempleNom">{item.nom}</div>
                <div className="evenementsImagesExemple2">
                  <div className="evenementsImagesExemple2Date">
                    Le {item.date}
                  </div>
                  <div className="evenementsImagesExemple2Lieu">
                    à {item.lieu}
                  </div>
                </div>
              </Flex>
            </Link>
          ))}
        </div>
      </div>
      <div className="evenementsPasses">
        <h2>Liste des évènements passés</h2>
        <div className="evenementsPassesImages">
          {listeEvenementsPasses.map((item: IEvenementsPassesProps, key) => (
            <Link href={"/evenement"} key={key}>
              <Flex className="evenementsImagesExemple">
                <Image
                  priority
                  src={item.image}
                  width={220}
                  height={160}
                  alt={item.alt}
                />
                <div className="evenementsImagesExempleNom">{item.nom}</div>
                <div className="evenementsImagesExemple2">
                  <div className="evenementsImagesExemple2Date">
                    Le {item.date}
                  </div>
                  <div className="evenementsImagesExemple2Lieu">
                    à {item.lieu}
                  </div>
                </div>
              </Flex>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
