import React from 'react';

import './search-bar.component.css';

export const SearchBar = props => {
  const { placeholder, handleChange } = props;
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}