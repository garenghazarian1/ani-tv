import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube videos"
        className="text-black form-input mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-vibrant-coral"
      />
      <button 
        type="submit" 
        className="px-4 py-2 bg-vibrant-coral text-white font-medium rounded-md hover:bg-coral-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
