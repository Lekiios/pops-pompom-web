import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
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
  const [evenement1, setEvenement1] = useState(0);
  const [evenement2, setEvenement2] = useState(0);
  const [evenement3, setEvenement3] = useState(0);
  return (
    <div>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gallerieMain">
        <div className="gallerieCaroussels">
          <div className="gallerieCaroussel">
            {evenement1}
            <h3>Caroussel 1</h3>
          </div>
          <div className="gallerieCaroussel">
            {evenement2}
            <h3>Caroussel 2</h3>
          </div>
          <div className="gallerieCaroussel">
            {evenement3}
            <h3>Caroussel 3</h3>
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
    </div>
  );
}
