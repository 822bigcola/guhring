import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./feedback.css";
import withRouter from "./withRouter";
import { checkLogin } from "../service/service";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

class Feedback extends React.Component {
  state = {
    feedback: "",
    redirectToLogin: false,
    redirect: false,
  };

  componentDidMount() {
    if (!checkLogin()) {
      this.setState({ redirectToLogin: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.redirectToLogin && !prevState.redirectToLogin) {
      toast.warn("⚠️ Please log in to continue!");
      this.props.router.navigate("/login");
    }
  }

  handleSubmitClick = async (event) => {
    event.preventDefault();
    const { feedback } = this.state;

    if (!feedback) {
      toast.warning("⚠️ Please enter your feedback");
      return;
    }

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_URL_API_SERVER}/feedback`,
        { feedback },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);

      toast.success("✅ Feedback submitted successfully");
      this.setState({ feedback: "" });
      window.location.reload();
    } catch (error) {
      toast.error("❌ Failed to submit feedback");
      console.error(error.response?.data || error.message);
    }
  };

  render() {
    return (
      <div className="feedback-wrapper">
        <div className="feedback-card">
          <h3 className="feedback-title">📝 Submit Feedback</h3>
          <form onSubmit={this.handleSubmitClick}>
            <ReactQuill
              value={this.state.feedback}
              onChange={(value) =>
                this.setState({ feedback: DOMPurify.sanitize(value) })
              }
              className="feedback-quill"
              placeholder="Enter your feedback here..."
            />
            <button type="submit" className="btn btn-primary feedback-submit">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Feedback);
