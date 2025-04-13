import "./App.css";

import Mainpage from "./pages/mainpage";
import GioToNews from "./pages/gio-to-news";
import GiaiPhongMienNamNews from "./pages/giai-phong-mien-nam-news";
import EtaxMobile from "./pages/etax-mobile-news";
import AddNews from "./pages/addnews";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarGuhring from "./views/navbarGuhring";
import FooterGuhring from "./views/footerGuhring";

function App() {
  let state = {
    data: [
      {
        id: 1,
        title: "Lễ 30/04 & 01/05/2025",
        content:
          "Dự kiến người lao động Việt Nam sẽ được nghĩ lễ 30/04 & 01/05 kéo dài 5 ngày liên tục?",
        thumbnail: "/giai-phong-mien-nam.jpg",
        path: "/giai-phong-mien-nam-news",
        hashtag: "#hr",
      },
      {
        id: 2,
        title: "Giỗ tổ Hùng Vương",
        content:
          "Thời gian nghĩ lễ bắt đầu từ thứ 2 ngày 07/04/2025 đến hết ngày 07/04/2025",
        thumbnail: "/gio-to.png",
        path: "/gio-to-news",
        hashtag: "#hr",
      },
      {
        id: 3,
        title: "Etax Mobile",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#accountant",
      },
      {
        id: 4,
        title: "Etax Mobile",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#accountant",
      },
      {
        id: 5,
        title: "Products & Services",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#product",
      },
      {
        id: 6,
        title: "Products & Services",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#product",
      },
      {
        id: 7,
        title: "Sales",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#sales",
      },
      {
        id: 8,
        title: "Sales VN",
        content:
          "Thông báo của Chi Cục Thuế về việc sử dụng ứng dụng Etax Mobile để kê khai thuế. Hướng dẫn cài đặt ứng dụng Etax Mobile trên ứng dụng di động",
        thumbnail: "/etax-mobile.jpg",
        path: "/etax-mobile-news",
        hashtag: "#sales",
      },
    ],
  };

  let productcard = state.data.filter((data) => {
    return data.hashtag === "#product";
  });

  let salescard = state.data.filter((data) => {
    return data.hashtag === "#sales";
  });
  let hrCard = state.data.filter((data) => {
    return data.hashtag === "#hr";
  });
  let accountingCard = state.data.filter((data) => {
    return data.hashtag === "#accountant";
  });

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavbarGuhring />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={<Mainpage listcard={state.data} />}
              />

              <Route
                path="/product"
                element={<Mainpage listcard={productcard} />}
              />
              <Route
                path="/sales"
                element={<Mainpage listcard={salescard} />}
              />
              <Route path="/hr" element={<Mainpage listcard={hrCard} />} />
              <Route
                path="/accountant"
                element={<Mainpage listcard={accountingCard} />}
              />
              <Route path="/addnews" element={<AddNews />} />
              <Route path="/gio-to-news" element={<GioToNews />} />
              <Route
                path="/giai-phong-mien-nam-news"
                element={<GiaiPhongMienNamNews />}
              />
              <Route path="/etax-mobile-news" element={<EtaxMobile />} />
            </Routes>
          </div>
          <FooterGuhring />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
