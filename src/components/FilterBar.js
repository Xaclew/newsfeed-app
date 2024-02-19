import React, { useState } from 'react';

function FilterBar({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    onCategoryChange(event.target.value); // Trigger parent function on category change
  };

  return (
    <div className="filter-bar">
      <select value={selectedCategory} onChange={handleChange}>
        <option value="all">All Categories</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
}

export default FilterBar;
