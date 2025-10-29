import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
        dispatch(login(form))
        navigate('/home')    
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Film size={32} className="text-red-600" />
          <h1 className="text-3xl font-bold text-white">MovieApp</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            name="email"
            value={form.email}
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            onChange={handleChange}
            name="password"
            value={form.password}
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded font-semibold hover:bg-red-700"
          >
            Login
          </button>
        </form>


        <p className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
