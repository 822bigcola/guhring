import React from "react";

class GiaiPhongMienNamNews extends React.Component {
  render() {
    return (
      <div>
        <div className="content-1">
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src={require("../Picture/giai-phong-mien-nam.jpg")}
              className="img-fluid"
              alt="Lich nghỉ lễ 30/04 và 01/05"
            />
          </div>
          <hr />
          <h1 className="main-title">
            Thông báo lịch nghĩ lễ 30/4 và 1/5 của cả nước
          </h1>
          <hr />
          <p className="main-content">
            <b>
              Theo thông báo từ Bộ Lao động - Thương binh và Xã hội, người lao
              động sẽ được nghỉ lễ 30/4 và 1/5 kéo dài 5 ngày liên tục.
            </b>
          </p>
          <p>
            Theo thông báo của Bộ Lao động - Thương binh và Xã hội (nay là Bộ
            Nội vụ), dịp nghỉ lễ 30/4 và 1/5, cán bộ, công chức, viên chức và
            người lao động sẽ được nghỉ 5 ngày liên tiếp, từ thứ Tư ngày (30/4)
            đến hết Chủ nhật (ngày 4/5). Để có kỳ nghỉ liên tục này, người lao
            động sẽ làm bù vào thứ Bảy ngày 26/4.
          </p>
          <p>
            Chiếu theo hướng dẫn của Bộ GD&ĐT, lịch nghỉ lễ 30/4 và 1/5, học
            sinh được nghỉ 5 ngày liên tục (30/4-4/5).
          </p>
          <p>
            Về nguyên tắc xây dựng kế hoạch thời gian năm học của các địa
            phương, Bộ GD&ĐT quy định: Kế hoạch thời gian năm học của các địa
            phương phải bảo đảm đủ 35 tuần thực học (học kỳ I có 18 tuần, học kỳ
            II có 17 tuần). Kế hoạch thời gian năm học phải phù hợp với đặc
            điểm, điều kiện thực tiễn của địa phương.
          </p>
          <p>
            khung kế hoạch thời gian năm học 2024-2025 do Bộ GD&ĐT ban hành, các
            trường kết thúc học kỳ 1 trước ngày 18/1/2025, hoàn thành chương
            trình và kết thúc năm học trước ngày 31/5/2025.
          </p>
          <p>
            Xét công nhận hoàn thành chương trình tiểu học và xét công nhận tốt
            nghiệp trung học cơ sở trước ngày 30/6/2025.
          </p>
        </div>
      </div>
    );
  }
}
export default GiaiPhongMienNamNews;
