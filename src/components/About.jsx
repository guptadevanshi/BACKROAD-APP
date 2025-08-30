import aboutImage from "../assets/images/about.jpeg";
const About = () => {
  return (
    <>
      <section className="section" id="about">
        <div className="section-title">
          <h2>
            about <span>us</span>
          </h2>
        </div>

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImage} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Traveling with Backroads isn’t just about reaching a destination -
              it’s about experiencing the journey. From handpicked locations and
              comfortable stays to guided adventures that immerse you in local
              culture, we make every trip unforgettable.
            </p>
            <p>
              Whether you’re exploring hidden gems, enjoying breathtaking
              landscapes, or connecting with fellow travelers, our tours are
              designed to give you more than just memories - they give you
              stories to share for a lifetime.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
