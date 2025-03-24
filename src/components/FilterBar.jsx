import React from 'react';

const FilterBar = ({ searchTerm, onSearchChange, selectedRank, onRankChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
      />

      <select
        value={selectedRank}
        onChange={(e) => onRankChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
      >
        <option value="">All Ranks</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
      </select>
    </div>
  );
};

export default FilterBar;
