import ProductCard from "./ProductCard";
import { shoes } from "../../constant/product";
import Carousel from "react-multi-carousel";
import { responsive  } from "../../constant";

export default function Shoes() {
  return (
    <>
      <div className="transition-move position-relative">
         <Carousel responsive={ responsive } showDots={ true }
            autoPlaySpeed={ 4000 }
            infinite={ true }
            autoPlay={ true }
            centerMode={ true }
            renderButtonGroupOutside={ true }
          renderDotsOutside={true}> 
          { shoes.map(({ id, ...item }) => (
            <ProductCard key={ id } id={id} {...item}></ProductCard>
        ))}
        </Carousel>
      </div>
    </>
  );
}
