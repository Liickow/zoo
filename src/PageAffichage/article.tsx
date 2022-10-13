import React from "react";

class Article extends React.Component<any,any> {
  render() {
    return (
      <article>
        <p>{this.props.texte}</p>
      </article>
    );
  }
}
export default Article;
