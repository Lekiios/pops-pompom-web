import Head from "next/head";
import Image from "next/image";
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

let idGoogle = "Maxime Le Bot";
let fili = "APP3 Info";
let anci = "8 ans";
let desc = "Je suis celui qui fait les musiques :sunglasses:";

export default function Gallerie() {
  var identiteGoogle = idGoogle;
  var filiere = fili;
  var anciennete = anci;
  var description = desc;
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
                <h3>{identiteGoogle}</h3>
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
