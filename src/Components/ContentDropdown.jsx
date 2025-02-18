import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContentDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="relative">
      <button
        className="bg-white text-black border rounded px-4 py-2 w-50 flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        Sort
        {/* Dropdown icon */}
        <svg
          className="ml-2 w-4 h-4 transform transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{
            transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.23a1 1 0 011.41 0L10 10.58l3.36-3.36a1 1 0 111.41 1.42l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 010-1.42z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <ul className="absolute right-0 mt-1 w-50 bg-white border rounded shadow-md">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/sort">Sort</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/featured">Featured</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/best-selling">Best Selling</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/alphabetical-a-z">Alphabetically, A-Z</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/alphabetical-z-a">Alphabetically, Z-A</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/price-low-high">Price, low to high</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/price-high-low">Price, high to low</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/date-old-new">Date, old to new</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/date-new-old">Date, new to old</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ContentDropdown;
