import React from "react";
import "./bodycardGuhring.css";
import { NavLink } from "react-router-dom";
import Loadingpage from "../pages/loading";

class BodyCardGuhring extends React.Component {
  render() {
    const { listcard } = this.props;
    return (
      <div className="body-content">
        <div className="row" style={{ width: "100%", height: "100%" }}>
          {listcard && listcard.length > 0 ? (
            listcard.map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item._id}>
                <NavLink to={item.path} className="card-link">
                  <div className="card">
                    {item.pathUrl && (
                      <img
                        className="img-thumbnail"
                        style={{ maxHeight: "300px" }}
                        alt={item.title || "Image"}
                        src={item.pathUrl}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.content}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <Loadingpage />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BodyCardGuhring;
