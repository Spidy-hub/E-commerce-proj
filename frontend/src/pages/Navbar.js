import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsCartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../Redux/userSlice';
import { toast } from 'react-hot-toast';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user)
  console.log(userData)
  const dispatch = useDispatch()

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = ()=> {
    dispatch(logoutRedux())
    toast("Logout Successfully")
  }

  console.log(process.env.REACT_APP_ADMIN_EMAIL);

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      {/* desktop */}
      <div className='flex items-center h-full justify-between'>
        <Link to=''>
          <div className='h-14 m-1 flex flex-row'>
          <img src={"https://o.remove.bg/downloads/c9d5146f-17e6-447e-bd25-1669c1763e7c/WhatsApp_Image_2023-10-18_at_4.19.51_PM-removebg-preview.png  "}
              alt='logo' 
              className="w-22 h-20 -mr-7 p-1 -m-3"
            />
            {/* <span className='text-red-500 text-xl mt-3 font-bold'>KIRA</span><span className="text-xl text-red-500 mt-3 font-bold">-SHOP</span> */}
          </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7 m-4 '>
          <div className='cursor-pointer text-2xl text-slate-600 relative'>
            <BsCartFill />
            <div className='-top-1 -right-1 text-white bg-red-500 h-4 w-4 text-center rounded-full m-0 p-0 text-sm absolute'>
              0
            </div>
          </div>
          <div className='text-slate-600' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer w-10 h-10 p-1.5 rounded-full  drop-shadow-md'>
              {  
                userData.image ? (
                <image src={userData.image} className='h-full w-full' />
                ) : (
                  <HiOutlineUserCircle />
                )  
              }
            </div>
            {showMenu && (                      
              <div className='md:hidden absolute right-2 top-16 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New product
                  </Link>
                )}
                
                {userData.image ? (
                  <>
                    <Link to='/profile' className='whitespace-nowrap cursor-pointer block my-2 px-2'>
                      Profile
                    </Link>
                    <Link to='/logout' className='whitespace-nowrap cursor-pointer block my-2 bg-red-500 px-2' onClick={handleLogout}> 
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to='/newproducts' className='whitespace-nowrap cursor-pointer block my-2 bg-red-500 text-white p-1 rounded-sm'> 
                      New Products
                    </Link>
                    <Link to='/login' className='whitespace-nowrap cursor-pointer block my-2 '>
                      Login
                    </Link>
                    <Link to='/register' className='whitespace-nowrap cursor-pointer block my-2'>
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
}

export default Navbar;
