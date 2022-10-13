import React from "react";
import IMG from "./imageClickable";
import data from "../data.json";
const all_data = data;

class PageAccueil extends React.Component<any,any> {
  render() {
    return (
      <div id="Accueil">
        <p id="Presentation">
          Voici le site qu'a réalisé la moitié de la classe L3 II au cours du
          premier semestre de l' année 2022-2023. Il présente une{" "}
          <strong>base de données d'animaux</strong>, en montrant les familles
          dont ils appartiennent, les zoos qui les possèdent et les individus
          connus qui portent leurs noms. Commencez directement votre recherche
          en cliquant sur l'image de votre choix !
        </p>

        <IMG
          source={all_data.img_espece}
          alt="titre"
          title={all_data.title_espece}
          lien="/espece/1"
        />
        <IMG
          source={all_data.img_individu}
          alt="titre"
          title={all_data.title_individu}
          lien="/individu/1"
        />
        <IMG
          source={all_data.img_zoo}
          alt="titre"
          title={all_data.title_zoo}
          lien="/zoo/1"
        />
        <IMG
          source={all_data.img_famille}
          alt="titre"
          title={all_data.title_famille}
          lien="/famille/1"
        />
      </div>
    );
  }
}
export default PageAccueil;
