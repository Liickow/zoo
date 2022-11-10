import React from "react";

class Information extends React.Component<any,any> {
  render() {
    console.log(typeof(this.props.infos));
    let liste = [];
    let intitules: string | any[] = [];
    let infos = this.props.infos;
    if (this.props.type === "espece") {
      intitules = [
        "Nom",
        "Nom Latin",
        "Famille",
        "Milieu d'évolution",
        "Régime Alimentaire"
      ];
    } else if (this.props.type === "zoo") {
      intitules = ["Nom", "Lien du site", "Taille", "Prix", "Adresse", "Pays"];
    } else if (this.props.type === "famille") {
      intitules = ["Nom", "Nom Latin"];
    } else if (this.props.type === "individu") {
      intitules = [
        "Nom Individu",
        "Genre",
        "Taille",
        "Nombre",
        "Poids",
        "Date de naissance",
        "Espece",
        "Zoo"
      ];
    } else {
      intitules = [];
    }
    for (let i = 0; i < intitules.length; i++) {
      liste.push(
        <p>
          {intitules[i]} : {infos[i]}
        </p>
      );
    }
    return <div>{liste}</div>;
  }
}
export default Information;
