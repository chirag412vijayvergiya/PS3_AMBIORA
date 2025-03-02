import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaRegUserCircle, FaUserCircle } from "react-icons/fa"; // Profile Icon
import { useUser } from "../hooks/useUser";
import axios from "axios";
import GoogleTranslate from "../GoogleTranslate";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, isPending, setUser } = useUser(); // ✅ Get user from context
  // console.log(user.data.data.firstName);

  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/users/logout"); // Replace with your actual API endpoint
      setUser(null); // Clear user data from context
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <header className="bg-white h-[75px] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">
                <a href="/">JobSeek</a>
              </span>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="#"
                className="text-blue-600 border-b-2 border-blue-600 px-1 pt-1 font-medium"
              >
                Find Jobs
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 font-medium"
              >
                Companies
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 font-medium"
              >
                Career Advice
              </a>
              <a
                href="/courselist"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 font-medium "
              >
                Courses Guide
              </a>

              {/* ✅ Add a post job button for recruitor role*/}
              {user?.data?.data?.role === "employer" && (
                <Link
                  to="/create-job"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Post Job
                </Link>
              )}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <GoogleTranslate />

            {/* ✅ Show Profile Icon If Logged In */}
            {user ? (
              <div className="relative group">
                <div className="flex items-center cursor-pointer space-x-2">
                  <FaRegUserCircle className="text-3xl text-blue-600" />
                  <span className="text-blue-600 font-medium">
                    {user.data.data.firstName || "Profile"}
                  </span>
                </div>

                {/* Dropdown for Logout */}
                <div className="absolute top-0.5 right-0 mt-2 w-40 bg-white shadow-lg rounded-lg hidden group-hover:flex flex-col pointer-events-auto">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {user.data.data.firstName || "Profile"}
                  </Link>
                  <button
                    onClick={logout} // Make sure logout function is defined
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                state={{ from: location.pathname }}
                className="bg-blue-500 text-white py-2 px-3 hover:bg-blue-700 font-medium rounded-lg"
              >
                Login
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-blue-600 text-blue-600 font-medium"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:text-gray-700 font-medium"
            >
              Companies
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:text-gray-700 font-medium"
            >
              Career Advice
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:text-gray-700 font-medium"
            >
              Salary Guide
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-4">
              {!isPending && isAuthenticated ? (
                // Show Profile Icon when logged in
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <FaUserCircle className="text-2xl" />
                  <span>{user?.name || "Profile"}</span>
                </Link>
              ) : (
                // Show Login Button when not logged in
                <Link
                  to="/login"
                  state={{ from: location.pathname }}
                  className="bg-blue-500 text-white py-2 px-3 hover:bg-blue-700 font-medium rounded-lg"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
