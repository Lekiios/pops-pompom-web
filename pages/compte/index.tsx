import Head from "next/head";
import React, { CSSProperties, useState } from "react";

export interface StyleSheet {
  [key: string]: CSSProperties;
}

export const style: StyleSheet = {
  text: {
    fontSize: "100px",
    fontStyle: "italic",
  },
};

export default function Compte() {
  const [idGoogle, setId] = useState<string>("Maxime Le Bot");
  const [filiere, setFiliere] = useState<string>("APP3 Info");
  const [description, setDesc] = useState<string>("8 ans");
  const [anciennete, setAnciennete] = useState<string>(
    "Je suis celui qui fait les musiques :sunglasses:"
  );
  return (
    <div>
      <Head>
        <title>Pompom4Ever</title>
        <meta name="description" content="On adore Next.js" />à
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="compteMain">
        <div className="comptePersonne">
          <div className="comptePersonneGroupe">
            <div className="comptePersonneIdentite">
              <div className="comptePersonneIdentiteGoogle">
                <h3>{idGoogle}</h3>
              </div>
              <div className="comptePersonneIdentitePlus">
                <div className="comptePersonneIdentitePlusFilière">
                  <h3>Filière: {filiere}</h3>
                </div>
                <div className="comptePersonneIdentitePlusAnciennete">
                  <h3>Ancienneté: {anciennete}</h3>
                </div>
              </div>
            </div>
            <div className="comptePersonnePhoto">
              <h3>Photo</h3>
            </div>
          </div>
          <div className="comptePersonneDescription">
            <h3>
              Description:<p>{description}</p>
            </h3>
          </div>
          <div className="comptePersonneEvenement">
            <h3>Evènements</h3>
            <p>RDD 2023</p>
            <p>Repas de Noël</p>
          </div>
        </div>
        <div className="compteGauche">
          <div className="compteDeconnexion"> Déconnexion</div>
          <div className="compteAdmin">
            Interface Admin :
            <h2 className="gallerieBestOfImage">Créer un evenement</h2>
            <h2 className="gallerieBestOfImage">Gestion des utilisateurs</h2>
            <h2 className="gallerieBestOfImage">Modérer les musiques</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
