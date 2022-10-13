import React from "react";
import { slide as Menu } from "react-burger-menu";

class MenuBurger extends React.Component<any,any> {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          {" "}
          &gt; Accueil{" "}
        </a>
        <a className="menu-item" href="/">
          {" "}
          &gt; Recherche{" "}
        </a>
        <a className="menu-item" href="/zoo/1">
          {" "}
          &gt; Zoo{" "}
        </a>
        <a className="menu-item" href="/famille/1">
          {" "}
          &gt; Familles{" "}
        </a>
        <a className="menu-item" href="/individu/1">
          {" "}
          &gt; Individus{" "}
        </a>
        <a className="menu-item" href="/espece/1">
          {" "}
          &gt; Espèces{" "}
        </a>
        <a className="menu-item" href="/">
          {" "}
          &gt; Carte{" "}
        </a>
        <a className="menu-item" href="/contact">
          {" "}
          &gt; Nous contacter{" "}
        </a>
        <a className="menu-item" href="/">
          {" "}
          &gt; Mentions légales{" "}
        </a>
      </Menu>
    );
  }
}
export default MenuBurger;
