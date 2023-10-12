import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsCartFill } from 'react-icons/bs';

function Navbar({ isLoggedIn }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      {/* desktop */}
      <div className='flex items-center h-full justify-between'>
        <Link to=''>
          <div className='h-14 m-8'>
            <img src={logo} className='h-full' alt='logo' />
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
            <div className='text-3xl cursor-pointer p-3'>
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className='md:hidden absolute right-2 top-16 bg-white py-2 px-2 shadow drop-shadow-md'>
                {isLoggedIn ? (
                  <>
                    <Link to='/profile' className='whitespace-nowrap cursor-pointer block my-2'>
                      Profile
                    </Link>
                    <Link to='/logout' className='whitespace-nowrap cursor-pointer block my-2'>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to='/login' className='whitespace-nowrap cursor-pointer block my-2'>
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
