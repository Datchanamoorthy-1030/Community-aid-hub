import FormHeader from "./FormHeader";
const DonateItems = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <FormHeader
  title="Donate Items"
  subtitle="Your unused items can change someone’s life."
/>


          {/* Form */}
          <form>
            <div className="form-group">
              <label>Item Type</label>
              <input type="text" placeholder="e.g. Clothes, Books" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity</label>
                <input type="text" placeholder="e.g. 10 items" />
              </div>

              <div className="form-group">
                <label>Condition</label>
                <select>
                  <option>New</option>
                  <option>Good</option>
                  <option>Usable</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Pickup Address</label>
              <textarea placeholder="Enter pickup location"></textarea>
            </div>

            <div className="form-group">
              <label>Upload Item Image</label>
              <div className="upload-box">
                Click or drag image to upload
              </div>
            </div>

            <div className="info-box">
              Items should be clean and in usable condition.
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

export default DonateItems;
