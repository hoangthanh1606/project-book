import React from "react";
import './styles.css'

function Footer() {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-center">
            <h3>DỊCH VỤ</h3>
            <a href="#">Điều khoản sử dụng</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Giới thiệu Fasaha</a>
            <a href="#">Hệ thống trung tâm - nhà sách</a>
          </div>
          <div className="footer-center">
            <h3>HỔ TRỢ</h3>
            <a href="#">Chính sách đổi trả - hoàn tiền</a>
            <a href="#">Chính sách khách sỉ</a>
            <a href="#">Phương thức vận chuyển</a>
            <a href="#">Phương thức thanh toán và xuất HĐ</a>
          </div>
          <div className="footer-center">
            <h3>TÀI KHOẢN CỦA TÔI</h3>
            <a href="#">Đăng nhập/Tạo tài khoản mới</a>
            <a href="#">Thay đổi địa chỉ khách hàng</a>
            <a href="#">Chi tiết tài khoản</a>
            <a href="#">Lịch sử mua hàng</a>
          </div>
          <div className="footer-center">
            <h3>LIÊN HỆ</h3>
            <div>
              <span>
                <i className="fas fa-map-marker-alt" />
              </span>
              459 Tôn Đức Thắng - Hòa Khánh Nam - Liên Chiểu - Đà Nẵng
            </div>
            <div>
              <span>
                <i className="far fa-envelope" />
              </span>
              dhspdn@gmail.com
            </div>
            <div>
              <span>
                <i className="fas fa-phone" />
              </span>
              0763719907
            </div>
            <div className="payment-methods">
              <img src="./images/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
