import React, {useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import user from '../assets/user.png'
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from "../utility/ImagetoBase64";


function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    image : ""
  }); 
  
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async(e)=>{
    const file = e.target.files[0];
    if (file) {
      const maxSizeBytes = 2 * 1024 * 1024; 
      if (file.size <= maxSizeBytes) {
        const data = await ImagetoBase64(file);
        setData((prev) => {
          return {
            ...prev,
            image: data,
          };
        });
      } else {
        toast.error('Image size exceeds the limit (2MB)');
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, cpassword } = data;
  
    if (firstName && lastName && email && password && cpassword ) {
      if (password === cpassword) {
        try {
          const response = await axios.post('http://localhost:1111/register', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.data.alert) {
            toast(response.data.message);
            navigate('/login');
          } else {
            toast.error(response.data.message, { icon: '🚫' });
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        alert("Password and Confirm Password do not match.");
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };
  
    
  return (
  <>
    <div className="p-4 md:p-4 mt-10">  
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
      <h1 className="text-center text-2xl font-bold m-8 text-red-500 rounded">Register</h1>
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={data.image ? data.image :  user} className="w-full h-full" alt='profile'/>
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="cpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="cpassword"
              name="cpassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.cpassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Register
          </button>
        </form>
        <p className="text-sm mt-2 text-center">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Register