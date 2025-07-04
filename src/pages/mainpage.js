import React from "react";

import NavbarGuhring from "../views/navbarGuhring";
import BodyCardGuhring from "../views/bodyCardGuhring";
import Newspage from "../pages/newspage";
import { Route, Routes, HashRouter } from "react-router-dom";
import axios from "axios";
//import AddNewsWrapper from "./AddNewsWrapper";
import Addnews from "./addnews";
import Loadingpage from "./loading";
import LoginpageWrapper from "./loginWrapper";
import LogoutPage from "./logout";
import ChangePassword from "./changePassword";
import FeedBack from "./feedback";

import SearchArticle from "./searchArtikel";
class Mainpage extends React.Component {
  state = { data: [], loading: true, username: "", islogin: false };
  async componentDidMount() {
    //Save data into localStorage
    const res = await axios.get(
      `${process.env.REACT_APP_URL_API_SERVER}/v1/api`
    );
    this.setState({ data: res.data });
    localStorage.setItem("dataNews", JSON.stringify(this.state.data));
  }
  renderDynamicRoutes = () => {
    return this.state.data.map((item) => (
      <Route key={item.path} path={item.path} element={<Newspage />} />
    ));
  };
  handleChangeUsername = (name) => {
    this.setState({ username: name, islogin: true });
  };
  render() {
    try {
      return (
        <HashRouter>
          <div className="App">
            <header className="App-header">
              <NavbarGuhring username={this.state.username} />
              <div className="container">
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<BodyCardGuhring listcard={this.state.data} />}
                  />
                  <Route
                    path="/production"
                    element={
                      <BodyCardGuhring
                        listcard={this.state.data.filter((item) =>
                          item.hashtag.includes("#production")
                        )}
                      />
                    }
                  />
                  <Route
                    path="/hr"
                    element={
                      <BodyCardGuhring
                        listcard={this.state.data.filter((item) =>
                          item.hashtag.includes("#hr")
                        )}
                      />
                    }
                  />
                  <Route
                    path="/sales"
                    element={
                      <BodyCardGuhring
                        listcard={this.state.data.filter((item) =>
                          item.hashtag.includes("#sales")
                        )}
                      />
                    }
                  />
                  <Route
                    path="/accountant"
                    element={
                      <BodyCardGuhring
                        listcard={this.state.data.filter((item) =>
                          item.hashtag.includes("#accountant")
                        )}
                      />
                    }
                  />
                  {this.state.data.length > 0 && this.renderDynamicRoutes()}
                  <Route path="/addnews" element={<Addnews />} />
                  <Route
                    path="/login"
                    element={
                      <LoginpageWrapper
                        updateUsername={this.handleChangeUsername}
                      />
                    }
                  />
                  <Route
                    path="/logout"
                    element={
                      <LogoutPage updateUsername={this.handleChangeUsername} />
                    }
                  />
                  <Route path="/searchArticle" element={<SearchArticle />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  <Route path="/feedback" element={<FeedBack />} />
                  <Route
                    path="*"
                    element={<div>Không tìm thấy nội dung</div>}
                  />
                </Routes>
              </div>
            </header>
          </div>
        </HashRouter>
      );
    } catch (error) {
      return (
        <>
          <Loadingpage />
        </>
      );
    }
  }
}
export default Mainpage;
