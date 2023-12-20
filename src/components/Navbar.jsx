import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleButton from '../toggle/ToggleButton ';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-warm-gray p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/ani-logo01.jpg" alt="Logo" className="h-8 w-8 rounded-full" /> 
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => isActive ? 'text-vibrant-coral' : 'text-soft-green'}
        >
          ANI TV
        </NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      <div className={`flex flex-col md:flex-row gap-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => 
            `px-3 py-2 rounded-md text-sm font-medium m-4 ${
              isActive ? 'bg-vibrant-coral text-white' : 'text-soft-green hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/movies" 
          className={({ isActive }) => 
            `px-3 py-2 rounded-md text-sm font-medium m-4 ${
              isActive ? 'bg-vibrant-coral text-white' : 'text-soft-green hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink 
          to="/series" 
          className={({ isActive }) => 
            `px-3 py-2 rounded-md text-sm font-medium m-4 ${
              isActive ? 'bg-vibrant-coral text-white' : 'text-soft-green hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          Series
        </NavLink>
        
      </div>
      <ToggleButton/>
    </nav>
  );
}

export default Navbar;
