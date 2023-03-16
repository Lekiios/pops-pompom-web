import Head from "next/head";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";

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
    <Layout underConstruct>
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
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image.png"
                width={150}
                height={100}
                alt="image1"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image2.png"
                width={150}
                height={100}
                alt="image2"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image3.png"
                width={150}
                height={100}
                alt="image3"
              />
            </div>
          </div>
          <div className="gallerieBestOfLigne">
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image4.png"
                width={150}
                height={100}
                alt="image4"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image5.png"
                width={150}
                height={100}
                alt="image5"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image6.png"
                width={150}
                height={100}
                alt="image6"
              />
            </div>
          </div>
          <div className="gallerieBestOfLigne">
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image7.png"
                width={150}
                height={100}
                alt="image7"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image8.png"
                width={150}
                height={100}
                alt="image8"
              />
            </div>
            <div className="gallerieBestOfImage">
              <Image
                priority
                src="/image9.png"
                width={150}
                height={100}
                alt="image9"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
