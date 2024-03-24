import { banner } from "../../assets/index";
export default function ImageBanner() {
  return (
    <>
      <div className="col-lg-5 col-sm-12 mt-3 banner-image">
        <img src={ banner } alt="" className="img-fluid" />
      </div>
    </>
  );
}
