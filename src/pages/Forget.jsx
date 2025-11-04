import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Forget = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = location.state?.email || "";
  const [email, setEmail] = useState(userEmail);

  const handleReset = (e) => {
    e.preventDefault();
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-700">
      <div className="w-full max-w-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg backdrop-blur-md">
        <h2 className="text-2xl text-center text-white font-semibold mb-5">
          Forget Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4 text-white">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200"
          >
            Reset Password
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-sm text-pink-300 hover:underline w-full text-center"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Forget;
