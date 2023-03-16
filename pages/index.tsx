import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { Button, Flex } from "@mantine/core";
import { Layout } from "../components/Layout";
import { style } from "./gallerie";
import { getUserData } from "../lib/dbUtils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface IEvenementProps {
  nom: string;
  date: string;
  lieu: string;
}
interface IEvenementsPassesProps {
  nom: string;
  date: string;
  lieu: string;
  image: string;
  alt: string;
}
interface IVideoProps {
  nom: string;
  lien: string;
}

let ev1: IEvenementProps = {
  nom: "RDD 2023 - Le retour 2",
  date: "15-05-2023",
  lieu: "Opéra Massy",
};

let ev2: IEvenementsPassesProps = {
  nom: "Derby, pure dinguerie",
  date: "19-11-2022",
  lieu: "MAPS - Orsay",
  image: "/derby.png",
  alt: "pompomDerby",
};

let vid1: IVideoProps = {
  nom: "Chorée 1 (Derby)",
  lien: "https://www.youtube.com/watch?v=VrY39ooSKBY",
};

let eventList = [ev1, ev1, ev1];
let pastEventList = [ev2, ev2, ev2];
let videoList = [vid1, vid1];

export default function Home() {
  const [listeEvenements, setListeEvenements] = useState(eventList);
  const [listeEvenementsPasses, setListeEvenementsPasses] =
    useState(pastEventList);
  const [listeVideos, setListeVideos] = useState(videoList);
  return (
    <Layout underConstruct>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="accueilMain">
        <div className="accueilListe">
          {listeEvenements.map((item: IEvenementProps, key) => (
            <Link href="./evenement">
              <Flex key={key} className="accueilListeObjet">
                <div className="accueilListeObjetNom">
                  <h4>{item.nom}</h4>
                </div>
                <div className="accueilListeObjet2">
                  <div className="accueilListeObjet2Date">Le {item.date}</div>
                  <div className="accueilListeObjet2Lieu">à {item.lieu}</div>
                </div>
              </Flex>
            </Link>
          ))}
        </div>
        <div className="accueilDroite">
          <div className="accueilDroiteHaut">
            <div className="accueilDroiteHautReseaux">
              <div className="accueilDroiteHautReseauxInsta">
                <Link href="https://www.instagram.com/pompom_polytech_paris_saclay/">
                  <Image
                    className="accueilImageReseaux"
                    priority
                    src={"/insta_logo.png"}
                    width={60}
                    height={60}
                    alt="instaLogo"
                  />
                </Link>
              </div>
              <div className="accueilDroiteHautReseauxFacebook">
                <Link href="https://www.facebook.com/groups/455375888394195">
                  <Image
                    className="accueilImageReseaux"
                    priority
                    src={"/facebook_logo.png"}
                    width={60}
                    height={60}
                    alt="faceookLogo"
                  />
                </Link>
              </div>
              <div className="accueilDroiteHautReseauxYouTube">
                <Link href="https://www.youtube.com/">
                  <Image
                    className="accueilImageReseaux"
                    priority
                    src={"/you_tube_logo.png"}
                    width={170}
                    height={60}
                    alt="youTubeLogo"
                  />
                </Link>
              </div>
            </div>
            <div className="accueilDroiteHautLogo">
              <Image
                priority
                src={"/pompom_logo.png"}
                width={120}
                height={120}
                alt="pompomPopsLogo"
              />
            </div>
          </div>
          <div className="accueilDroiteBas">
            <div className="accueilDroiteBasEvenementsPasses">
              {listeEvenementsPasses.map(
                (item: IEvenementsPassesProps, key) => (
                  <Flex
                    key={key}
                    className="accueilDroiteBasEvenementsPassesObjet"
                  >
                    <Image
                      priority
                      src={item.image}
                      width={220}
                      height={160}
                      alt={item.alt}
                    />
                    <div className="accueilDroiteBasEvenementsPassesObjetNom">
                      {item.nom}
                    </div>
                    <div className="accueilDroiteBasEvenementsPassesObjetDate">
                      Le {item.date}
                    </div>
                    <div className="accueilDroiteBasEvenementsPassesObjetLieu">
                      à {item.lieu}
                    </div>
                  </Flex>
                )
              )}
            </div>
            <div className="accueilDroiteBasVideos">
              {listeVideos.map((item: IVideoProps, key) => (
                <Flex key={key} className="accueilDroiteBasVideosObjet">
                  <Link href={item.lien}>
                    <h4 className="accueilDroiteBasVideosObjetNom">
                      {item.nom}
                    </h4>
                  </Link>
                </Flex>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
