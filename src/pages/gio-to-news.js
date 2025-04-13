import React from "react";
import "../pages/gio-to-news.css";

class GioToNews extends React.Component {
  render() {
    return (
      <div>
        <div className="content-1">
          <br />

          <img
            src={require("../Picture/gio-to.png")}
            className="img-fluid"
            alt="Lich nghỉ lễ Giỗ Tổ Hùng Vương"
          />

          <br />
          <br />
          <hr />
          <h1 className="main-title">
            Thông báo lịch nghĩ lễ Giỗ Tổ Hùng Vương
          </h1>
          <hr />
          <p className="first-row">
            <b>Kính gửi:</b> Toàn thể cán bộ nhân viên Công ty TNHH Guhring Việt
            Nam
          </p>
          <p>
            Công ty TNHH Guhring Việt Nam xin thông báo đến Toàn thể cán bộ nhân
            viên về lịch nghỉ lễ Giỗ Tổ Hùng Vương như sau:
          </p>
          <p>
            <b>Thời gian nghỉ: 01 ngày</b> - từ thứ 2 ngày 07/04/2025 đến hết
            thứ 2 ngày 07/04/2025 <br />
            <b>Thời gian làm việc trở lại:</b> Thứ 3 ngày 08/04/2025
          </p>
          <p>
            <b>Lưu ý:</b>
          </p>
          <ul>
            <li>
              Đề nghị các phòng ban sắp xếp tiến độ công việc hợp lý để không
              ảnh hưởng đến tiến độ chung.
            </li>
            <li>
              Các bộ phận có lịch làm việc theo đặc thù công việc vui lòng tuân
              thủ theo sự sắp xếp của quản lý trực tiếp.
            </li>
            <li>
              Nhân viên có trách nhiệm bảo quản tài sản, tắt các thiết bị điện
              trước khi nghĩ lể để đảm bảo an toàn.
            </li>
          </ul>
          <p>
            <em>
              <b>
                Kính chúc Toàn thể cán bộ nhân viên có kỳ nghỉ lễ vui vẻ và hạnh
                phúc bên gia đình và người thân!
              </b>
            </em>
          </p>
          <p>
            <em>
              <b>Trân trọng cảm ơn!</b>
            </em>
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              src={require("../Picture/thong-bao-nghi-le-guhring.jpg")}
              className="img-fluid"
              alt="Lich nghỉ lễ Giỗ Tổ Hùng Vương"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GioToNews;
