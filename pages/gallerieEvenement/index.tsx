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

export default function GallerieEvenement() {
  const [nom, setEvenement1] = useState<string>(
    "RDD 2023, sur Free From fait l'avion"
  );
  return (
    <Layout>
      <main className="gallerieEvenementMain">
        <div className="gallerieEvenementGauche">
          <h1 className="gallerieEvenementGaucheTitre">{nom}</h1>
          <div className="gallerieEvenementGaucheCaroussel">
            <h3>Exemple Carroussel</h3>
          </div>
        </div>
        <div className="gallerieEvenementListe">
          <h1>Exemple Liste</h1>
        </div>
      </main>
    </Layout>
  );
}
