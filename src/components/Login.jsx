import FormHeader from "./FormHeader";

const Login = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <FormHeader
  title="Welcome Back"
  subtitle="Please sign in to your account to continue."
/>


          {/* Form */}
          <form>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
