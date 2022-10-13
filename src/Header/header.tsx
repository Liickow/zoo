import React from "react";
import Bouton from "./bouton";
import Titre from "./titre";
import MenuBurger from "./menu";
import data from "../data.json";
const all_data = data;

class Header extends React.Component<any,any> {
  handleClickLogin() {
    return 0;
  }

  renderTitre() {
    return <Titre id="page-wrap" nom={all_data.title_site} />;
  }

  renderBoutonLogin() {
    return (
      <Bouton
        id="page-wrap"
        texte="Login"
        onClick={() => this.handleClickLogin()}
      />
    );
  }

  renderMenuBurger() {
    return <MenuBurger pageWrapId={"page-wrap"} />;
  }

  render() {
    return (
      <header>
        {this.renderMenuBurger()}
        {this.renderTitre()}
        {this.renderBoutonLogin()}
      </header>
    );
  }
}
export default Header;
