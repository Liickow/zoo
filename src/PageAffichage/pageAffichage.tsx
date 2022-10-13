import React from "react";
import Article from "./article";
import FilDariane from "./filDariane";
import Image from "./image";
import Information from "./information";

class PageAffichage extends React.Component<any,any> {
  render() {
    return (
      <body>
        <main>
          <FilDariane valeurs={this.props.chemin} hrefs={this.props.hrefs} />
          <section>
            <Image source={this.props.image} />
            <Information
              type={this.props.type}
              infos={this.props.informations}
            />
          </section>
          <section id="paragraphe">
            <Article texte={this.props.paragraphe1} />
            <Article texte={this.props.paragraphe2} />
          </section>
        </main>
      </body>
    );
  }
}
export default PageAffichage;
