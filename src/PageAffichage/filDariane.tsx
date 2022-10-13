import React from "react";

class FilDariane extends React.Component<any,any> {
  render() {
    let valeurs = this.props.valeurs.split(",");
    let hrefs = this.props.hrefs.split(",");
    let res = [];
    if (valeurs.length === hrefs.length) {
      if (valeurs.length > 0) {
        res.push(<a href={hrefs[0]}>{valeurs[0]}</a>);
      }
      for (let i = 1; i < valeurs.length; i++) {
        res.push(" > ");
        res.push(<a href={hrefs[i]}>{valeurs[i]}</a>);
      }
      return <p id="filDariane">{res}</p>;
    } else {
      return <p>Problème de valeurs</p>;
    }
  }
}
export default FilDariane;
