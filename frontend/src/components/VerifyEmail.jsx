import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verifyEmail, setVerifyEmail] = useState(false);

  useEffect(() => {
    // Extract token from the URL
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    console.log("Token:", token);

    if (!token) {
      setError("Invalid verification link!");
      setIsLoading(false);
      return;
    }

    // Call the verification API with a GET request
    axios
      .get(
        `http://localhost:8000/api/v1/users/auth/verify-email?token=${token}`
      )
      .then((response) => {
        setVerifyEmail(true);
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Verification failed!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [location.search]);

  return (
    <div className="mx-auto mt-10 flex min-h-screen w-full items-center justify-center overflow-hidden p-3 font-mono tracking-wider sm:mx-auto">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Email Verification
        </h2>

        {isLoading && (
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-3 text-gray-600">Verifying your email...</p>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-lg border border-red-500 bg-red-100 p-4 text-red-600">
            <span className="text-lg font-semibold">
              ❌ Verification Failed!
            </span>
            <p className="mt-1 text-sm">{error}</p>
          </div>
        )}

        {verifyEmail && (
          <div className="mt-4 rounded-lg border border-green-500 bg-green-100 p-4 text-green-700">
            <span className="text-lg font-semibold">✅ Email Verified!</span>
            <p className="mt-1 text-sm">You can now log in.</p>

            <button
              onClick={() => navigate("/login")}
              className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
