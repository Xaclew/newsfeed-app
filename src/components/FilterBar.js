import React, { useState } from 'react';

const FilterBar = ({ selectedCategory, onFilterChange }) => {
  // Use controlled component pattern for select element
  const [dropdownValue, setDropdownValue] = useState(selectedCategory);

  const handleCategoryChange = (event) => {
    setDropdownValue(event.target.value);
    onFilterChange(event.target.value); // Immediately propagate selection change to NewsFeed
  };

  return (
    <div className="filter-bar">
      {/* Clear label for accessibility */}
      <label htmlFor="category-filter">Filter by Category:</label>
      <select
        id="category-filter"
        value={dropdownValue} // Ensure select reflects current state
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="war">War</option>
        <option value="entertainment">Entertainment</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default FilterBar;
