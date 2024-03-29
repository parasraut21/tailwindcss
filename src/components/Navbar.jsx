import React from 'react';

function Navbar({ username, balance }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Home</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="flex items-center">
          <div className="text-white text-lg font-bold mr-3 ">{username}</div>
          <div className="text-white text-lg font-bold mr-3 animate-pulse">Balance : {balance}</div>
          <img src={process.env.PUBLIC_URL + '/coin.png'} alt="Coin" className="inline h-8 w-8 mr-2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;