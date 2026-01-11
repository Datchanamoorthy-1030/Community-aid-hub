const DonateFood = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <div className="card-icon"></div>
            <h2>Donate Food</h2>
            <p>Help reduce food waste and feed those in need</p>
          </div>

          {/* Form */}
          <form>
            <div className="form-group">
              <label>Food Type</label>
              <input type="text" placeholder="e.g. Cooked meals, Fruits" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity</label>
                <input type="text" placeholder="e.g. 20 meals" />
              </div>

              <div className="form-group">
                <label>Expiry Time</label>
                <input type="time" />
              </div>
            </div>

            <div className="form-group">
              <label>Pickup Address</label>
              <textarea placeholder="Enter pickup location"></textarea>
            </div>

            <div className="form-group">
              <label>Upload Food Image</label>
              <div className="upload-box">
                Click or drag image to upload
              </div>
            </div>

            <div className="info-box">
              Please ensure food is fresh and safe for consumption.
            </div>

            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Submit Donation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;
