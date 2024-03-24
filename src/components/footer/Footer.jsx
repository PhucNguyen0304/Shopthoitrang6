import { logo } from "../../assets";
import { FaFacebookF, FaTiktok, FaYoutube,FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="row border-bottom border-2 py-5">
        <div className="col-4">
          <div className="logo mb-4 position-relative">
            <img src={logo} width="60" alt="" className="img-fluid" />
            <span className=" fs-2 store position-absolute bottom-0">
              &nbsp;Store
            </span>
          </div>
          <h3 className="fw-bold fs-4text-uppercase">Công ty TNHH JS Store</h3>
          <p className="fs-6">Số điện thoại: 098484848</p>
          <p className="fs-6">
            Địa chỉ: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Fugiat.
          </p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <h1 className="fs-3 ps-3">Công ty</h1>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tuyển dụng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h1 className="fs-3 ps-3">Chính sách</h1>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Khách hàng thân thiết
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Đổi trả
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Bảo hành
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Bảo mật
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Thường gặp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <h3>Kết nối với JS Store</h3>
          <div className="d-flex gap-4">
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaFacebookF />
            </div>
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaYoutube />
            </div>
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaTiktok />
            </div>
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Contact></Contact>
          </div>
        </div>
          <div className="w-100 h-100">
            <p className="gocenter fs-6 my-4">
              © 2024. Copy right
            </p>
      </div>
    </>
  );
}
