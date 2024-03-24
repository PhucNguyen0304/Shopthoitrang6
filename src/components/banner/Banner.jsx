import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";

export default function Banner() {
  return (
    <>
      <div id ="Home" className="container-fluid pb-5 banner">
          <div className="row">
            <ContentBanner></ContentBanner>
            <ImageBanner></ImageBanner>
          </div>
      </div>
    </>
  );
}
