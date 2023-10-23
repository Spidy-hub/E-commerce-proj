import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import loginSignupImage from '../assets/user.png';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target; 
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const response = await axios.post('http://localhost:8000/login', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const dataRes = response.data;
          toast.success(dataRes.message);
          navigate('/');
        } else {
          const errorData = response.data;
          toast.error(errorData.message);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while logging in.');
      }
    } else {
      toast.error('Please enter both email and password');
    }
  };

  return (
    <div className="p-3 mt-40 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <h1 className="text-center text-2xl font-bold m-8 text-red-500">Login</h1>
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" alt="profile" />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <div className="flex justify-between items-center">
            <label className="flex-1" htmlFor="password">
              Password
            </label>
            <Link to="/forgot-password" className="text-red-500">
              Forget Password?
            </Link>
          </div>

          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />

            <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-sm mt-2 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
