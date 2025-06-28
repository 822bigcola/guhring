import react from "react";

class Loadingpage extends react.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="mt-3">Đang tải dữ liệu...</h4>
        </div>
      </div>
    );
  }
}
export default Loadingpage;
