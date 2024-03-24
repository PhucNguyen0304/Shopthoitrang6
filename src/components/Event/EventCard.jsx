export default function EventCard({ title, image, date }) {
  return (
    <div className="m-2">
      <a href="#" className="event p-2">
        <div className="event-image w-100">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="my-2 event-content">
          <h2 className="event-title fs-5 text-body fw-bold lineLimit">
            {title}
          </h2>
          <p className="fw-bold fs-6 d-inline">
            <i className="bi bi-calendar-week"></i>&nbsp;
            {date}
          </p>
          <p href="#" className="float-end fs-6">
            Xem thêm
          </p>
        </div>
      </a>
    </div>
  );
}
