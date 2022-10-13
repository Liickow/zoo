import React from "react";

class Image extends React.Component<any,any> {
  render() {
    return (
      <figure>
        <img src={this.props.source} width="100%" alt="alt_image" />
      </figure>
    );
  }
}
export default Image;
