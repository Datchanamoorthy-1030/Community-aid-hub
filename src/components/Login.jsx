const Login = () => {
  return (
    <div className="page">
      <div className="center-wrapper">
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <div className="card-icon"></div>
            <h2>Login</h2>
            <p>Access your account to manage donations</p>
          </div>

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
