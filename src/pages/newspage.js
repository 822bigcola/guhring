import React from "react";
import "./newspage.css";
import axios from "axios";
import withRouter from "./withRouter"; // HOC
import Loadingpage from "./loading";

class NewsPage extends React.Component {
  state = { news: null, loading: true, notFound: false };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    const currentPath = this.props.router.location.hash
      ? this.props.router.location.hash.replace("#", "")
      : this.props.router.location.pathname;

    const prevPath = prevProps.router.location.hash
      ? prevProps.router.location.hash.replace("#", "")
      : prevProps.router.location.pathname;

    if (currentPath !== prevPath) {
      this.setState({ loading: true, notFound: false, news: null }, () => {
        this.fetchData();
      });
    }
  }
  async fetchData() {
    try {
      let dataNews = null;
      let storedData = localStorage.getItem("dataNews");

      if (storedData) {
        dataNews = JSON.parse(storedData);
      }

      if (!dataNews || dataNews.length === 0) {
        const res = await axios.get(
          `${process.env.REACT_APP_URL_API_SERVER}/v1/api`
        );

        dataNews = res.data;
        localStorage.setItem("dataNews", JSON.stringify(dataNews));
      }

      const currentPath = this.props.router.location.hash
        ? this.props.router.location.hash.replace("#", "")
        : this.props.router.location.pathname;

      const foundNews = dataNews.find((item) => item.path === currentPath);

      if (foundNews) {
        this.setState({ news: foundNews });
      } else {
        this.setState({ notFound: true });
      }
    } catch (error) {
      console.error("Lỗi tải dữ liệu:", error.message);
      this.setState({ notFound: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, notFound, news } = this.state;

    if (loading)
      return (
        <div className="content-1">
          <Loadingpage />
        </div>
      );

    if (notFound || !news) {
      return (
        <div className="content-1">
          <h2>Không tìm thấy bài viết</h2>
          <p>Vui lòng kiểm tra lại đường dẫn.</p>
        </div>
      );
    }

    const formattedParagraphs = (news.bodycontent || "")
      .split(/\n{1,}/)
      .map((p) => p.trim());

    return (
      <div>
        <div className="content-1">
          <br />
          {news.pathUrl && (
            <div style={{ textAlign: "center" }}>
              <img
                src={news.pathUrl}
                className="img-fluid"
                alt={news.title || "Ảnh minh họa"}
              />
            </div>
          )}
          <hr />
          <h1 className="main-title">{news.title}</h1>
          <hr />
          {formattedParagraphs.map((para, index) => (
            <p
              key={index}
              style={{
                textAlign: "justify",
                textIndent: "2em",
                lineHeight: "1.6",
                marginBottom: "1em",
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(NewsPage);
