import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Get previous page from state, default to home if not found
  const from = location.state?.from || "/";

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/users/login",
  //       { email, password },
  //       { withCredentials: true } // Ensures cookies are sent
  //     );

  //     toast.success("Logged in successfully!");
  //     console.log("User data:", response.data);

  //     // Redirect user back to the page they came from (or home)
  //     navigate(from, { replace: true });
  //   } catch (error) {
  //     console.error("Login error:", error.response?.data?.message);
  //     toast.error(error.response?.data?.message || "Login failed!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        { email, password },
        { withCredentials: true } // Ensures cookies are sent
      );

      toast.success("Logged in successfully!");
      console.log("User data:", response.data);

      // Reload the page after login
      window.location.reload();

      // OR navigate and reload manually
      // navigate(from, { replace: true });
      // setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.error("Login error:", error.response?.data?.message);
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-sm text-center text-gray-500 mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
