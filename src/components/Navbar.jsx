import { Link } from "react-router-dom";

const Navbar = ({ type = "landing" }) => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
  <img src="/logo.png" alt="Community Aid Hub logo" className="logo-img" />
  <span>Community Aid Hub</span>
</Link>


        {/* Center Menu */}
        {type === "landing" && (
          <nav className="navbar-menu">
            <Link to="/">Home</Link>
            <Link to="/donate-food">Donate Food</Link>
            <Link to="/donate-items">Donate Items</Link>
            <Link to="/volunteer">Volunteer</Link>
          </nav>
        )}

        {/* Right Actions */}
        <div className="navbar-actions">
          {type === "landing" ? (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>

              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          ) : (
            <Link to="/" className="nav-link">
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
