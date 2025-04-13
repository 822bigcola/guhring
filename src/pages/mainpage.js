import React from "react";
import BodyCardGuhring from "../views/bodyCardGuhring.js";

class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <BodyCardGuhring listcard={this.props.listcard} />
      </div>
    );
  }
}
export default Mainpage;
