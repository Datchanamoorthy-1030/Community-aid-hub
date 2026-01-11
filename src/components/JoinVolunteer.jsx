const JoinVolunteer = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <div className="card-icon"></div>
            <h2>Join as Volunteer</h2>
            <p>Contribute your time and skills to make a difference</p>
          </div>

          {/* Form */}
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />
            </div>

            <div className="form-group">
              <label>Area of Interest</label>
              <select>
                <option>Food Distribution</option>
                <option>Item Collection</option>
                <option>Logistics Support</option>
                <option>Community Outreach</option>
              </select>
            </div>

            <div className="form-group">
              <label>Availability</label>
              <input type="text" placeholder="e.g. Weekends, Evenings" />
            </div>

            <div className="info-box">
              Volunteers help coordinate donations and ensure they reach the
              right people.
            </div>

            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Join as Volunteer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinVolunteer;
