import React from "react";
import Article from "./article";
import FilDariane from "./filDariane";
import Image from "./image";
import Information from "./information";

class PageAffichage extends React.Component<any,any> {
  state = {apiInfo:[],chemin:""}
  componentDidMount(){
    let urlService = "";
    let id = window.location.href.split('/').slice(-1);
    if(this.props.type === "espece"){
      urlService = "http://obiwan.univ-brest.fr:7040/especes/par_id/";
      this.setState({chemin:"Famille,Espèce,"});
    }else if(this.props.type === "famille"){
      urlService = "http://obiwan.univ-brest.fr:7160/famille/par_id/";
      this.setState({chemin:"Famille,"});
    }else if(this.props.type === "zoo"){
      urlService = "http://obiwan.univ-brest.fr:7050/zoo/par_id/";
      this.setState({chemin:"Pays,Zoo,"});
    }else if(this.props.type === "individu"){
      urlService = "http://obiwan.univ-brest.fr:7080/individu/par_id/";
      this.setState({chemin:"Pays,Zoo,Individu,"});
    }
    urlService = urlService + id;
    fetch(urlService) .then((response) => response.json())
                      .then((responseJson) => { this.setState({apiInfo:Object.values(responseJson[0])});})
                      .catch((error) => { console.error(error); }); 
  }
  render() {
    console.log(this.state.apiInfo);
    console.log(window.location.href);
    return (
      <body>
        <main>
          <FilDariane valeurs={this.state.chemin} hrefs={this.props.hrefs} />
          <section>
            <Image source={this.props.image} />
            <Information
              type={this.props.type}
              infos={this.state.apiInfo}
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
