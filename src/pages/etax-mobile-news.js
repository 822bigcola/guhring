import React from "react";

class EtaxMobile extends React.Component {
  render() {
    return (
      <div>
        <div class="content-1">
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src={require("../Picture/etax-mobile.jpg")}
              class="img-fluid"
              alt="Etax Mobile"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={require("../Picture/ilovepdf_pages-to-jpg/Thong bao thue_page-0001.jpg")}
              class="img-fluid"
              alt="Etax Mobile"
            />
            <img
              src={require("../Picture/ilovepdf_pages-to-jpg/Thong bao thue_page-0002.jpg")}
              class="img-fluid"
              alt="Etax Mobile"
            />
            <img
              src={require("../Picture/ilovepdf_pages-to-jpg/Thong bao thue_page-0003.jpg")}
              class="img-fluid"
              alt="Etax Mobile"
            />
            <img
              src={require("../Picture/ilovepdf_pages-to-jpg/Thong bao thue_page-0004.jpg")}
              class="img-fluid"
              alt="Etax Mobile"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EtaxMobile;
