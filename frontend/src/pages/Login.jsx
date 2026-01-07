import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toyImg from '../assets/toys.jpg';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    }
  };

  return (
    // <div className="min-h-[80vh] flex items-center justify-center p-4">
    //   <form
    //     className="bg-white p-6 rounded shadow-md w-full max-w-lg"
    //     onSubmit={handleSubmit}
    //   >
    //     <h2 className="text-2xl font-bold text-gray-800">Welcome, Guest</h2>
    //     <h2 className="text-5xl mb-6 text-gray-800">Login</h2>

    //     {error && <p className="text-red-500 mb-4">{error}</p>}
    //     <label className="font-medium text-gray-500" htmlFor="">
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       placeholder="Enter your registered email id"
    //       className="border border-gray-400 rounded p-2 w-full mb-3"
    //       value={form.email}
    //       onChange={(e) => setForm({ ...form, email: e.target.value })}
    //     />

    //     <label className="font-medium text-gray-500" htmlFor="">
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       placeholder="Enter your password"
    //       className="border border-gray-400 rounded p-2 w-full mb-3"
    //       value={form.password}
    //       onChange={(e) => setForm({ ...form, password: e.target.value })}
    //     />
    //     <button className="bg-blue-500 text-white p-2 w-full cursor-pointer">
    //       Login
    //     </button>
    //     <p className="mt-4 text-center">
    //       Don't have an account?
    //       <Link className="text-amber-800 hover:underline ml-3" to="/register">
    //         Register
    //       </Link>
    //     </p>
    //   </form>
    // </div>

    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 bg-gray-800 text-white relative">
        <img
          src={toyImg}
          alt="Login Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 flex flex-col justify-center px-10">
          <h2 className="text-2xl font-semibold leading-snug max-w-md">
            Choose a job you love, and you never have to work a day in your life
          </h2>

          <p className="mt-4 opacity-80 text-sm">– Confucius</p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:h-2/5 flex items-center justify-center p-6 mt-20">
        <form
          onSubmit={handleSubmit}
          className=" bg-white w-full max-w-2xl p-10"
        >
          <h3 className="text-gray-600 font-medium">Welcome Guest,</h3>

          <h1 className="text-4xl font-bold text-gray-800 mt-1 mb-8">
            Login here
          </h1>

          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          <label className="block text-gray-600 text-sm mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your registered email id"
            className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label className="block text-gray-600 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* <div className="text-right mb-6">
            <button type="button" className="text-blue-600 text-sm">
              Forgot Password?
            </button>
          </div> */}

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white mt-8 rounded-md hover:bg-blue-700"
          >
            Login →
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?
            <Link
              to="/register"
              className="text-amber-800 hover:underline ml-1"
            >
              Register now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
