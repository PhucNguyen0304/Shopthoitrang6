import { RiStarFill } from "react-icons/ri";
import { comment } from "../../constant/comment";

function Comment({ name, job, image, content, id }) {
  return (
    <>
      <div
        className={
          id == 1100 ? "col-12 carousel-item active" : "col-12 carousel-item "
        }
      >
        <div className="row">
          <div className="col-4">
            <div className="customer p-4 w-100 h-100 border border-3 rounded-5">
              <div className="customer-image">
                <img src={image} alt="" className="img-fluid rounded-3 w-100" />
              </div>
              <div className="customer-info">
                <h3 className="customer-name mt-3">{name}</h3>
                <p className="customer-job">{job}</p>
              </div>
            </div>
          </div>
          <div className="col-8 border rounded-5 border-3">
            <div className="comment">
              <div className="above gocenter p-4 border-1 border-bottom border-2">
                <h3 className="text-uppercase fw-bold fs-3">Đánh giá</h3>
                <div className="star">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                </div>
              </div>
              <p className="fs-5 py-5">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <div className="container-fluid pb-5 border-bottom border-2" id="About">
        <div className="title gocenter py-5">
          <h1 className="text-uppercase fw-bold highlight">Thông tin</h1>
        </div>
        <div className="container pb-5">
          <div
            className=" carousel slide"
            id="slideComment"
            data-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#slideComment"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#slideComment"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#slideComment"
                data-bs-slide-to="2"
              ></button>
            </div>
            <div className=" row carousel-inner">
              {comment.map(({ id, ...user }) => (
                <Comment key={id} id={id} {...user} />
              ))}
            </div>
          <button
            className="btn prev-button py-2 rounded-start-pill highlight fs-1"
            type="button"
            data-bs-target="#slideComment"
            data-bs-slide="prev"
          >
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <button
            className="btn next-button py-2 rounded-end-circle highlight fs-1"
            type="button"
            data-bs-target="#slideComment"
            data-bs-slide="next"
          >
            <i className="arrow bi bi-caret-right-fill"></i>
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
