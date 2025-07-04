import React from "react";
import "./addnews.css";
import axios from "axios";
import { removeVietnameseTones, isTokenExpired } from "../service/service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withRouter from "./withRouter";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AddNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      bodycontent: "",
      pathUrl: "",
      preview: null,
      thumbnail: null,
      hashtags: [],
      redirectToLogin: false,
      redirect: false,
    };
    this.reactQuillRef = null;
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      this.setState({ redirectToLogin: true });
    } else {
      const role = sessionStorage.getItem("role");
      if (!["admin", "hr", "accounting"].includes(role)) {
        this.setState({ redirect: true });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.redirectToLogin && !prevState.redirectToLogin) {
      toast.warn("⚠️ Please log in to continue!");
      this.props.router.navigate("/login");
    }
    if (this.state.redirect && !prevState.redirect) {
      toast.warn("🚫 You do not have permission to access this page!");
      this.props.router.navigate(-1);
    }
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  handleSubmitClick = async (event) => {
    event.preventDefault();

    const { title, content, bodycontent, thumbnail, hashtags } = this.state;

    if (!title || !content || !bodycontent) {
      toast.warn(
        "⚠️ Please fill in all required fields: title, summary, and content!"
      );
      return;
    }

    try {
      toast.info("📤 Submitting post...");
      let pathUrl = "";

      if (thumbnail) {
        const formdata = new FormData();
        formdata.append("file", thumbnail);
        formdata.append("upload_preset", "ml_default");

        const res1 = await axios.post(
          "https://api.cloudinary.com/v1_1/dmzzpfwgx/image/upload",
          formdata
        );
        pathUrl = res1.data.secure_url;
      }

      const tempPath =
        "/" + removeVietnameseTones(title).toLowerCase().replace(/\s+/g, "-");

      const news = {
        title,
        content,
        bodycontent,
        path: tempPath,
        hashtag: hashtags.join(""),
        pathUrl,
        _id: this.getRandomInt(1, 1000),
      };

      const token = sessionStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      await axios.post(
        `${process.env.REACT_APP_URL_API_SERVER}/news`,
        news,
        config
      );

      toast.success("✅ Post submitted successfully!");
      this.props.router.navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.dismiss();
      toast.error("❌ Failed to submit the post!");
    }
  };

  handleTitle = (e) => this.setState({ title: e.target.value });
  handleContent = (e) => this.setState({ content: e.target.value });
  handleBodyContent = (e) => this.setState({ bodycontent: e });

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

  imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dmzzpfwgx/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        const imageURL = data.secure_url;
        const editor = this.reactQuillRef.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", imageURL);
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    };
  };

  render() {
    const { title, content, bodycontent, preview } = this.state;

    const modules = {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ align: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: this.imageHandler,
        },
      },
    };

    return (
      <div className="news-container">
        <h4 className="news-title">📝 Create New Post</h4>
        <form>
          <div className="form-group">
            <label className="form-label-1">📌 Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter post title"
              value={title}
              onChange={this.handleTitle}
            />
          </div>

          <div className="form-group">
            <label className="form-label-1">🖼️ Thumbnail Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={this.handleFileChange}
            />
            {preview && (
              <img src={preview} alt="preview" className="preview-image" />
            )}
          </div>

          <div className="form-group">
            <label className="form-label-1">📄 Summary</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter summary"
              value={content}
              onChange={this.handleContent}
            />
          </div>

          <div className="form-group">
            <label className="form-label-1">📝 Full Content</label>
            <ReactQuill
              className="custom-editor"
              ref={(el) => (this.reactQuillRef = el)}
              value={bodycontent}
              onChange={this.handleBodyContent}
              theme="snow"
              placeholder="Write full content..."
              modules={modules}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "align",
                "list",
                "bullet",
                "link",
                "image",
              ]}
            />
          </div>

          <div className="form-group">
            <label className="form-label-1">🏷️ Hashtags</label>
            <div className="hashtag-group">
              {["accountant", "hr", "production", "sales"].map((item) => (
                <div className="form-check" key={item}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`${item}Checkbox`}
                    name={item}
                    onChange={this.handleCheckboxChange}
                  />
                  <label
                    className="form-check-label badge-label"
                    htmlFor={`${item}Checkbox`}
                  >
                    #{item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group text-right">
            <button
              type="submit"
              className="btn-submit"
              onClick={this.handleSubmitClick}
            >
              🚀 Submit Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddNews);
