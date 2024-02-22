import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange(selectedCategory);
  };

  return (
    <div className="filter-bar">
        <button value="" onClick={handleCategoryChange}>All Categories</button>
        <button value="Technology" onClick={handleCategoryChange}>Technology</button>
        <button value="War" onClick={handleCategoryChange}>War</button>
        <button value="Entertainment" onClick={handleCategoryChange}>Entertainment</button>
    </div>
  );
};

export default FilterBar;
