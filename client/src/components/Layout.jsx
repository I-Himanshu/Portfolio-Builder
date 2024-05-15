import React, { useState } from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

function LayOut() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`bg-primary-900 text-white transition-all duration-300 sticky h-screen top-0 left-0 overflow-hidden ${
          isMenuOpen ? 'w-64' : 'w-0 md:w-auto'
        }`}
      >
        <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="flex-1 p-3 md:p-8 bg-neutral-100">
        <div className="flex justify-between items-center mb-6">
          <button
            className=" bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <h1 className="text-2xl font-bold">
            Portrev
          </h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayOut;