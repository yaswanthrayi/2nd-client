import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_PHONE = "9652222002"; // Set your phone
const ADMIN_PASSWORD = "chakrymaster2002"; // Set your password

const AdminLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone === ADMIN_PHONE && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid phone number or password.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 w-full max-w-xs">
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-full hover:bg-yellow-500 transition-all duration-300"
        >
          Login
        </button>
        {error && <div className="text-red-400 text-center mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;