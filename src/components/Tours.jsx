import { toursData } from "../data";

export const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={tour.pic} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.country}
                  </p>
                  <p>{tour.days} days</p>
                  <p>from ${tour.amount}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
