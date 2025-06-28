import React from "react";
import "./addnews.css";
import axios from "axios";
import { removeVietnameseTones, isTokenExpired } from "../service/service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loginpage from "./login";

class AddNews extends React.Component {
  state = {
    title: "",
    content: "",
    bodycontent: "",
    pathUrl: "",
    preview: null,
    thumbnail: null,
    hashtags: [],
    redirectToLogin: false,
  };

  componentDidMount() {
    this.checkLogin();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.redirectToLogin && !prevState.redirectToLogin) {
      this.props.navigate("/login"); // đúng chuẩn: navigate trong lifecycle
    }
  }

  checkLogin = () => {
    const token = sessionStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      toast.warn("Please login to continue");
      this.setState({ redirectToLogin: true });
      return false;
    }
    return true;
  };

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  handleSubmitClick = async (event) => {
    event.preventDefault();

    if (!this.state.title || !this.state.content || !this.state.bodycontent) {
      toast.warn("⚠️ Vui lòng nhập đầy đủ tiêu đề, nội dung và diễn giải!");
      return;
    }

    try {
      toast.info("Đang gửi dữ liệu...");
      let pathUrl = "";

      if (this.state.thumbnail) {
        const formdata = new FormData();
        formdata.append("file", this.state.thumbnail);
        formdata.append("upload_preset", "ml_default");

        const res1 = await axios.post(
          "https://api.cloudinary.com/v1_1/dmzzpfwgx/image/upload",
          formdata
        );
        pathUrl = res1.data.secure_url;
      }

      const tempPath =
        "/" +
        removeVietnameseTones(this.state.title)
          .toLowerCase()
          .replace(/\s+/g, "-");

      const news = {
        title: this.state.title,
        content: this.state.content,
        bodycontent: this.state.bodycontent,
        path: tempPath,
        hashtag: this.state.hashtags.join(""), // Ghép chuỗi hashtags
        pathUrl: pathUrl,
        _id: this.getRandomInt(1, 1000),
      };

      const token = sessionStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      await axios.post(
        `${process.env.REACT_APP_URL_API_SERVER}/news`,
        news,
        config
      );

      toast.success("Đăng bài thành công!");
      this.props.navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi upload:", error.response?.data || error.message);
      toast.dismiss();
      toast.error("Đăng bài thất bại!");
    }
  };

  handleTitle = (e) => this.setState({ title: e.target.value });
  handleContent = (e) => this.setState({ content: e.target.value });
  handleBodyContent = (e) => this.setState({ bodycontent: e.target.value });

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ thumbnail: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ preview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => {
      let hashtags = [...prevState.hashtags];
      if (checked) {
        hashtags.push(`#${name}`);
      } else {
        hashtags = hashtags.filter((tag) => tag !== `#${name}`);
      }
      return { hashtags };
    });
  };

  render() {
    const username = sessionStorage.getItem("username");
    const token = sessionStorage.getItem("token");

    if (username && token && !isTokenExpired(token)) {
      return (
        <div className="container-content">
          <form>
            <div className="mb-3">
              <label className="form-label">Tiêu đề</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tiêu đề"
                onChange={this.handleTitle}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ảnh</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={this.handleFileChange}
              />
              {this.state.preview && (
                <img
                  src={this.state.preview}
                  alt="preview"
                  className="mt-4 w-64"
                />
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Nội dung chính</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tóm tắt nội dung chính"
                onChange={this.handleContent}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Diễn giải</label>
              <textarea
                value={this.state.bodycontent}
                onChange={this.handleBodyContent}
                rows={50}
                className="w-full p-2 border rounded mb-4"
                placeholder="Nhập nội dung......"
                style={{ height: "500px", width: "100%" }}
              />
            </div>

            <div
              className="mb-3 form-check"
              style={{ display: "flex", gap: "50px" }}
            >
              {["accountant", "hr", "product", "sales"].map((item) => (
                <div className="child-checkbox" key={item}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`${item}Checkbox`}
                    name={item}
                    onChange={this.handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${item}Checkbox`}
                  >
                    {item.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmitClick}
            >
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return <Loginpage />;
    }
  }
}

export default AddNews;
