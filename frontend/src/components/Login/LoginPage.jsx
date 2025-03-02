import React, { useState } from "react";
import Login from "./Login";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Get Your Job Now with JobSeek
          </h2>
        </div>

        {/* Right Column - Login Form */}
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
