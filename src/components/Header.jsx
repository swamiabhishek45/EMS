import React from 'react'

const Header = () => {
  return (
      <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
              Hello <br /> <span className='text-3xl'>Abhishek</span> 👋
          </h1>
          <button className='bg-red-500 p-2 px-4
          rounded-md font-bold'>Log Out</button>
      </div>
  );
}

export default Header