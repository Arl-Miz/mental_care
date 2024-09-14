import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (

    <nav className='fixed left-0 top-0 w-full z-10 shadow-md bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center py-4 px-8 border-b border-solid'>

    <div className='flex flex-col items-center space-x-4 mb-4 md:flex-row md:mb-0'>
        {/* <div className='text-[#1C160C]'>icon</div> */}
        <Image
            src={'/mental-health.png'}
            alt='icon'
            width={40}
            height={40}
        
        />

        <div><p className='text-black'>Mental Health Care</p></div>
      </div>

      {/* Right section: Navigation links */}
      {/* <div className='flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-2'> */}
      <div className='flex flex-col items-center space-x-8 mb-4 md:flex-row md:mb-0'>
      {/* <div className="flex items-center gap-9"> */}
            <a className="text-[#1C160C] text-sm font-medium " href="#">Courses</a>
            <a className="text-[#1C160C] text-sm font-medium " href="#">Tests</a>
            <button
              className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Log in</span>
            </button>
            <button className='px-4 py-2 bg-[#019863] rounded-3xl hover:bg-[#188d64] text-white'><span className='truncate'>Sign Up</span></button>
            {/* <button><span className='truncate'>Sign Up</span></button> */}
            {/* <a className="text-[#1C160C] text-sm font-medium " href="#">Sign</a> */}
          </div>
        {/* <div>Dashboard</div>
        <div>Courses</div>
        <div>Tests</div>t
        <div>Log In</div>
        <div>Sign Up</div>
               </div> */}
    </nav>
  )
}

export default Navbar
