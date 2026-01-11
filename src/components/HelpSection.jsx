import { FaUtensils, FaBoxOpen, FaHandsHelping } from "react-icons/fa";

const HelpSection = () => {
  return (
    <section className="help">
      <div className="container">
        <h2 className="section-title">How You Can Help</h2>

        <div className="help-grid">
          {/* Card 1 */}
          <div className="help-card">
            <div className="help-icon">
  <FaUtensils />
</div>

            <h3>Donate Food</h3>
            <p>
              Share surplus food with nearby NGOs and help reduce food waste
              while feeding those in need.
            </p>
            <button className="btn card-btn">Donate Food</button>
          </div>

          {/* Card 2 */}
          <div className="help-card">
            <div className="help-icon">
  <FaBoxOpen />
</div>

            <h3>Donate Items</h3>
            <p>
              Donate clothes, books, and essentials to organizations supporting
              underprivileged communities.
            </p>
            <button className="btn card-btn">Donate Items</button>
          </div>

          {/* Card 3 */}
          <div className="help-card">
            <div className="help-icon">
  <FaHandsHelping />
</div>

            <h3>Join as Volunteer</h3>
            <p>
              Volunteer your time and skills to support NGOs and make a direct
              impact.
            </p>
            <button className="btn card-btn">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
