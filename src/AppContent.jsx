// src/AppContent.js
import React from 'react';
import { useTheme } from './toggle/ThemeContext';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

const AppContent = () => {
  const { theme } = useTheme();

  // Determine the Tailwind classes based on the theme
  const backgroundColorClass = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColorClass = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className={`${backgroundColorClass} ${textColorClass} min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppContent;
