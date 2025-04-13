import React from "react";
import "./bodycardGuhring.css";
import { NavLink } from "react-router-dom";

class BodyCardGuhring extends React.Component {
  render() {
    return (
      <div className="body-content">
        <div className="row" style={{ width: "100%", height: "100%" }}>
          {this.props.listcard.map((item, index) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                <NavLink to={item.path} className={"card-link"}>
                  <div className="card">
                    <img
                      className="img-thumbnail"
                      alt="Giai phong miem nam"
                      src={require(`../Picture${item.thumbnail}`)}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.content}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BodyCardGuhring;
