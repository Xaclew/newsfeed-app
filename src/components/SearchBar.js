import React, { useState } from 'react';

function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value); // Trigger parent function on search term change
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
