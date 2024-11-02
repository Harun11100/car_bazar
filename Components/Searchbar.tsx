'use client';
import React, { useState } from 'react';
import SearchManufacturers from './SearchManufacturers';

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected Manufacturer:', manufacturer);
    // Add any additional search handling here
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturers
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
