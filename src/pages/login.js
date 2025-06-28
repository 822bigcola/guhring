import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class Loginpage extends React.Component {
  state = { user: { username: "", password: "" }, islogin: true };
  handleButtonSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API_SERVER}/login`,
        this.state.user
      );
      this.props.updateUsername(this.state.user.username);
      toast.success("Login successfully");
      sessionStorage.setItem("username", this.state.user.username);
      sessionStorage.setItem("token", res.data.token);
      this.props.navigate(-1);
    } catch (error) {
      toast.warning("Wrong username or password");
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };
  render() {
    return (
      <div
        className="container-content"
        style={{ marginLeft: "30%", marginRight: "30%" }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleButtonSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Loginpage;
