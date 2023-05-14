import React from "react";
class classComponent extends React.Component {
  render() {
    const {name} = this.props
    return (<h3>from classComponent.js {name} </h3>);
  }
}

export default classComponent;
