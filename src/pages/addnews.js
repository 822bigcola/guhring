import React from "react";
import "./addnews.css";

class AddNews extends React.Component {
  render() {
    return (
      <div className="container-content">
        <card>
          <h1>Add News</h1>
          <form>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              required
              style={{ marginLeft: "10px" }}
            />
          </form>
        </card>
      </div>
    );
  }
}
export default AddNews;
