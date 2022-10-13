import React from "react";

class Bouton extends React.Component<any,any> {
  render() {
    return <button onClick={this.props.onClick}> {this.props.texte} </button>;
  }
}
export default Bouton;
