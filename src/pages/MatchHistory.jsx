import React, { useState, useEffect, useMemo } from 'react';
import matchData from '../data/matchData'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css"; 
import ExcelButton from '../components/ExcelButton';

const ITEMS_PER_PAGE = 10; 

const MatchHistory = () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedResult, setSelectedResult] = useState(''); 
  const [startDate, setStartDate] = useState(startOfMonth); 
  const [endDate, setEndDate] = useState(today); 


  const filteredData = useMemo(() => {
    let sorted = [...matchData];

    
    if (selectedResult) {
      sorted = sorted.filter((match) => match.result === selectedResult);
    }

    
    if (startDate) {
      sorted = sorted.filter((match) => new Date(match.date) >= new Date(startDate));
    }
    if (endDate) {
      sorted = sorted.filter((match) => new Date(match.date) <= new Date(endDate));
    }

    
    sorted.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [sortBy, sortDirection, selectedResult, startDate, endDate]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE); 
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  };

  return (
    <div className="p-4 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Match History</h2>
  <ExcelButton getData={() => filteredData} filename="MatchHistory.xlsx" />

</div>
      
      <div className="flex gap-4 mb-4 ">
        <div className="flex gap-2 items-center">
          <label className="text-gray-700 dark:text-white">Result:</label>
          <select
            value={selectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
            className="p-2 border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="Win">Win</option>
            <option value="Loss">Loss</option>
          </select>
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-gray-700 dark:text-white">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-2 border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select start date"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-gray-700 dark:text-white">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="p-2 border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            dateFormat="yyyy-MM-dd"
            placeholderText="Select end date"
          />
        </div>
      </div>

      <table className="w-full text-left border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
          <tr>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('date')}>Date</th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('opponent')}>Opponent</th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('result')}>Result</th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('points')}>Points</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((match) => (
            <tr key={match.id} className="border-t border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="p-2 text-gray-800 dark:text-white">{match.date}</td>
              <td className="p-2 text-gray-800 dark:text-white">{match.opponent}</td>
              <td className="p-2 text-gray-800 dark:text-white">{match.result}</td>
              <td className="p-2 text-gray-800 dark:text-white">{match.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          ◀
        </button>
        <span className="text-gray-700 dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MatchHistory;
