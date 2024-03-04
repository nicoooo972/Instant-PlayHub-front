import React from 'react';

import { FaSearch } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="fixed h-16 bg-gray-800 text-white w-screen flex flex-row justify-between items-center py-2 px-4 ">
      <div className="ml-4">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>

      <div className="flex rounded-full bg-gray-700 text-white items-center px-4 py-2 mr-4">
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent focus:outline-none w-full text-white"
        />
      </div>

    </div>
  );
};

export default Topbar;