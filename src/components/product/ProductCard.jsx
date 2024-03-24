//ProductCard.jsx

export default function ProductCard({ ...props }) {
  return (
    <> 

        <div
          className="row p-3"
        >
          <div className="col-12 product-image py-3">
            <img
              src={props.image}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "20px 20px 10px" }}
            />
          </div>
          <div className="col-12 ">
            <div className="row">
              <div className="col-9 gap-2">
                <div className="product-title size-20 text-body fw-bold lineLimit">
                  {props.name}
                </div>
                <div className="product-price size-16 highlight fw-bold">
                  {props.price}$
                </div>
              </div>
              <div className="col-3">
                <div className="product-bag align-self-center d-flex flex-row-reverse ">
                  <button className="btn back-highlight p-2">
                    <i className="bi bi-cart-plus-fill h3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}



