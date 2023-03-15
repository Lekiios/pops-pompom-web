import Head from "next/head";
import React, { useState } from "react";
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

export default function Gallerie() {
  const [evenement1, setEvenement1] = useState<string>("RDD 2023");
  const [evenement2, setEvenement2] = useState<string>("RDD 2022");
  const [evenement3, setEvenement3] = useState<string>("RDD 2021");
  return (
    <Layout>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gallerieMain">
        <div className="gallerieCaroussels">
          <div className="gallerieCaroussel">
            {evenement1}
            <a href="./gallerieEvenement">
              <h3>Caroussel 1</h3>
            </a>
          </div>
          <div className="gallerieCaroussel">
            {evenement2}
            <a href="./gallerieEvenement">
              <h3>Caroussel 2</h3>
            </a>
          </div>
          <div className="gallerieCaroussel">
            {evenement3}
            <a href="./gallerieEvenement">
              <h3>Caroussel 3</h3>
            </a>
          </div>
        </div>
        <div className="gallerieBestOf">
          {" "}
          BEST OF
          <div className="gallerieBestOfLigne">
            <h2 className="gallerieBestOfImage">Image 1</h2>
            <h2 className="gallerieBestOfImage">Image 2</h2>
            <h2 className="gallerieBestOfImage">Image 3</h2>
          </div>
          <div className="gallerieBestOfLigne">
            <h2 className="gallerieBestOfImage">Image 4</h2>
            <h2 className="gallerieBestOfImage">Image 5</h2>
            <h2 className="gallerieBestOfImage">Image 6</h2>
          </div>
          <div className="gallerieBestOfLigne">
            <h2 className="gallerieBestOfImage">Image 7</h2>
            <h2 className="gallerieBestOfImage">Image 8</h2>
            <h2 className="gallerieBestOfImage">Image 9</h2>
          </div>
        </div>
      </main>
    </Layout>
  );
}
