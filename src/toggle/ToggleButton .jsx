import React from 'react';
import { useTheme } from './ThemeContext';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isChecked = theme === 'dark';

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={toggleTheme}
          className='sr-only'
        />
        <div className={`block h-8 w-14 rounded-full transition 
                        ${isChecked ? 'bg-black' : 'bg-[#E5E7EB]'}`}></div>
        <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition 
                        transform ${isChecked ? 'translate-x-6' : ''}`}></div>
      </div>
    </label>
  );
};

export default ToggleButton;
