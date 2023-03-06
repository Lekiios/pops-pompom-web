import Head from "next/head";
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

export default function Gallerie() {
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
            <div className="evenementHautDetailsNom">{}</div>

          </div>
          <div className="evenementHautBouton">
            <h3>Caroussel 2</h3>
          </div>
        </div>
        <div className="evenementBas">
          <div className="evenementBasDescription">
            <h2 className="gallerieBestOfImage">Image 1</h2>
            <h2 className="gallerieBestOfImage">Image 2</h2>
            <h2 className="gallerieBestOfImage">Image 3</h2>
          </div>
          <div className="evenementBasPhoto">
            <h2 className="gallerieBestOfImage">Image 4</h2>
            <h2 className="gallerieBestOfImage">Image 5</h2>
            <h2 className="gallerieBestOfImage">Image 6</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
