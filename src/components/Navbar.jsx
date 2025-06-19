import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 px-6 py-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold hover:opacity-90 transition-all duration-200">
          🚀 MyPortfolio
        </Link>
        <div className="space-x-4 flex items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="hover:bg-pink-500 px-3 py-1 rounded transition duration-150"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:bg-pink-500 px-3 py-1 rounded transition duration-150"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="hover:bg-blue-500 px-3 py-1 rounded transition duration-150"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="hover:bg-blue-500 px-3 py-1 rounded transition duration-150"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-medium px-4 py-1.5 rounded hover:bg-red-700 transition duration-150"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
