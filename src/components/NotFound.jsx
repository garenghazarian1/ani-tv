
import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-warm-gray text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <p className="mb-8">The page you're looking for doesn't seem to exist.</p>
      <NavLink to="/" className="px-4 py-2 bg-vibrant-coral text-white rounded hover:bg-coral-dark">
        Go Home
      </NavLink>
    </div>
  );
}

export default NotFound;
