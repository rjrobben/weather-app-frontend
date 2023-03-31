import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitting', query)
    onSubmit(query);
  };

  return (
    <form
        className='flex items-center justify-center' 
        onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        className="border border-gray-400 rounded py-2 px-4 mr-2 focus:outline-none focus:shadow-outline"
      />
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
