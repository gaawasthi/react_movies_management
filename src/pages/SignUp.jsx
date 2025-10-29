import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/features/authSlice';

const SignUp = () => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  const [form , setForm] = useState({
   name:"",
   email:"",
   password:""
  })
  const handleChange =(e)=>{
   setForm({...form , [e.target.name]:e.target.value })
   console.log(form);
   
  }
  const handleSubmit =(e)=>{
        e.preventDefault()
      dispatch(signup(form))
        navigate('/home')


  } 
  return (
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-md bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-lg">
    
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sign Up</h1>
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        onChange={handleChange}
        value={form.name}
        name="name"
        type="text"
        placeholder="Name"
        className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      
      <input
        onChange={handleChange}
        value={form.email}
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      
      <input
        onChange={handleChange}
        value={form.password}
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      
      <button
        type="submit"
        className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors"
      >
        Sign Up
      </button>
    </form>
    
    <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
      Already have an account?{' '}
      <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>

  );
};

export default SignUp;