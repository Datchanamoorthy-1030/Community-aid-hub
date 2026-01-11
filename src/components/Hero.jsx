import { Link } from "react-router-dom";
// import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">🌱 Sustainable Giving</span>

          <h1>
            Reduce Waste.<br />
            <span className="highlight">Feed the Needy.</span>
          </h1>

          <p>
            Connect with local NGOs and volunteers to donate excess food and
            essential items. Together, we can build a hunger-free community.
          </p>

          <div className="hero-buttons">
            <Link to="/donate-food" className="btn btn-primary">
              Donate Food
            </Link>

            <Link to="/donate-items" className="btn btn-primary">
              Donate Items
            </Link>

            <Link to="/volunteer" className="btn btn-primary">
              Join as Volunteer
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
       <div className="hero-visual">
  <div className="hero-image-wrapper">
    <img
      src="/hero.png"
      alt="Community aid illustration"
      className="hero-image"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
