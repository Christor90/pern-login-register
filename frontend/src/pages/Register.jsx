// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = ({ setUser }) => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/register', form);
//       setUser(res.data.user);
//       navigate('/');
//     } catch (err) {
//       console.error(err);
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-[80vh] flex items-center justify-center p-4">
//       <form
//         className="bg-white p-6 rounded shadow-md w-full max-w-lg"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold text-gray-800">
//           Don't have account?
//         </h2>
//         <h2 className="text-5xl mb-6 text-gray-800">Register</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <label className="text-gray-500 font-medium" htmlFor="">
//           Name
//         </label>
//         <input
//           type="text"
//           placeholder="name"
//           className="border border-gray-400 rounded p-2 w-full mb-3"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         <label className="font-medium text-gray-500" htmlFor="">
//           Email
//         </label>
//         <input
//           type="email"
//           placeholder="email"
//           className="border border-gray-400 rounded p-2 w-full mb-3"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <label className="font-medium text-gray-500" htmlFor="">
//           Password
//         </label>
//         <input
//           type="password"
//           placeholder="password"
//           className="border border-gray-400 rounded p-2 w-full mb-3"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button className="bg-blue-500 text-white p-2 w-full cursor-pointer">
//           Register
//         </button>
//         <p className="mt-4 text-center">
//           Already have an account?
//           <Link className="text-amber-800 ml-2 hover:underline" to="/login">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import toyImg2 from '../assets/toys2.jpg';

const Register = ({ setUser }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', form);
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* LEFT IMAGE SIDE (smaller width) */}
      <div className="hidden md:flex w-1/3 bg-gray-800 text-white relative">
        <img
          src={toyImg2}
          alt="Register Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 flex flex-col justify-center px-8">
          <h2 className="text-2xl font-semibold leading-snug max-w-sm">
            Create your account and take control of your journey
          </h2>
        </div>
      </div>

      {/* RIGHT — REGISTER FORM (wider section) */}
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <form
          className="bg-white w-full max-w-2xl p-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Register</h2>

          <p className="text-gray-500 mb-8">
            Don’t have an account? Create one below.
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          <button className="w-full h-12 bg-blue-600 text-white mt-8 rounded-md hover:bg-blue-700">
            Register
          </button>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?
            <Link className="text-amber-800 ml-2 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
