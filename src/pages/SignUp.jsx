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
      // redux functionality 
      dispatch(signup(form))
        navigate('/home')


  } 
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8">
        
        <h1 className="text-2xl font-bold text-white mb-6">Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            value={form.name}
            name='name'
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          
          <input
            onChange={handleChange}
            value={form.email}
            name='email'
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          
          <input
            onChange={handleChange}
            value={form.password}
            name='password'
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-700 text-white rounded"
          />
          
          <button  type='submit' className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700">
            Sign Up
          </button>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
        
      </div>
    </div>
  );
};

export default SignUp;