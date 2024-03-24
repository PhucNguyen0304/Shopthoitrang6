import { feature } from "../../constant/feature";

function Card({ image, title, type }) {
  return (
    <>
      <div className="col-6 h-100 feature" >
        <div className="feature-image position-relative">
          <img src={image} alt="" className="img-fluid w-100" />
          <div className="position-absolute zoom top-0 start-0 w-100 h-100"></div>
          <div className="feature-title w-100 position-absolute text-uppercase text-shadow size-16 text-center bottom-0 start-0 py-4 text-light">
            {title}
            <h2 className="fs-3 fw-bold ft-2 text-light text-shadow">{type}</h2>
            <button className=" my-2 ps-2 py-2 btn btn-light rounded-1 text-dark text-upper align-self-center fs-5">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Feature() {
  return (
    <div className="container-fluid pb-5" id="Features">
      <div className="title gocenter py-5">
        <h1 className="text-uppercase fw-bold highlight">Đặc sắc</h1>
      </div>
      <div className="row pb-3">
        {feature.map(({ id, ...item }) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </div>
  );
}
