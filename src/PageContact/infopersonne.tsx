import React from "react";
import "../styles.css";

class IMG extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      source: this.props.source,
      alt: this.props.alt,
      title: this.props.title,
      lien: this.props.lien
    };
  }
  render() {
    return (
      <div className="box_img_click">
        <a href="mailto:{this.state.lien}">
          <img
            src={this.state.source}
            alt={this.state.alt}
            width="200px"
            height="150px"
          ></img>
          <hr />
          <h3 className="Titre"> {this.state.title} </h3>
        </a>
      </div>
    );
  }
}

export default IMG;
