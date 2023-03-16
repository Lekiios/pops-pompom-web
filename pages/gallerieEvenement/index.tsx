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

export default function GallerieEvenement() {
  const [nom, setEvenement1] = useState<string>(
    "RDD 2023, sur Free From fait l'avion"
  );
  return (
    <Layout underConstruct>
      <main className="gallerieEvenementMain">
        <div className="gallerieEvenementGauche">
          <h2 className="gallerieEvenementGaucheTitre">{nom}</h2>
          <div className="gallerieEvenementGaucheCaroussel">
            <h4>Exemple Carroussel</h4>
          </div>
        </div>
        <div className="gallerieEvenementListe">
          <div className="gallerieEvenementListeLigne">
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image.png"
                width={150}
                height={100}
                alt="image1"
              />
            </div>
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image2.png"
                width={150}
                height={100}
                alt="image2"
              />
            </div>
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image3.png"
                width={150}
                height={100}
                alt="image3"
              />
            </div>
          </div>
          <div className="gallerieEvenementListeLigne">
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image4.png"
                width={150}
                height={100}
                alt="image4"
              />
            </div>
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image5.png"
                width={150}
                height={100}
                alt="image5"
              />
            </div>
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image6.png"
                width={150}
                height={100}
                alt="image6"
              />
            </div>
          </div>
          <div className="gallerieEvenementListeLigne">
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image7.png"
                width={150}
                height={100}
                alt="image7"
              />
            </div>
            <div className="gallerieEvenementListeImage">
              <Image
                priority
                src="/image8.png"
                width={150}
                height={100}
                alt="image8"
              />
            </div>
            <div className="gallerieEvenementListeImage">
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
