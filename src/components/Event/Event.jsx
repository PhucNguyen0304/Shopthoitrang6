import EventCard from "./EventCard";
import { event } from "../../constant/event";
import { responsive  } from "../../constant";

import Carousel from "react-multi-carousel";

export default function Event() {
  return (
    <>
      <div className="container-fluid layer pb-5" id="Event">
        <div className="title gocenter py-5 ">
          <h1 className="text-uppercase fw-bold highlight">Tin tức</h1>
        </div>
        <div className="container position-relative pb-3">
          <Carousel responsive={ responsive } showDots={ true }
            autoPlaySpeed={ 4000 }
            infinite={ true }
            autoPlay={ true }
            centerMode={ true }
            renderButtonGroupOutside={ true }
          renderDotsOutside={true}> 
            {event.map(({ id, ...item }) => (
              <EventCard key={id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
