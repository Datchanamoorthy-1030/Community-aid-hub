import FormHeader from "./FormHeader";
const Register = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <FormHeader
  title="Create an Account"
  subtitle="Join us in helping those in need today."
/>


          {/* Form */}
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
            </div>

            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
