import React, { useState, useMemo } from 'react';
import players from '../data/playersData';
import FilterBar from '../components/FilterBar';
import PlayerTable from '../components/PlayerTable';
import ExcelButton from '../components/ExcelButton';

const ITEMS_PER_PAGE = 10;

const PlayerStats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  
  const filteredData = useMemo(() => {
    let filtered = players;

    
    if (searchTerm) {
      filtered = filtered.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    
    if (selectedRank) {
      filtered = filtered.filter((player) => player.rank === selectedRank);
    }

    
    filtered.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedRank, sortBy, sortDirection]);

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
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Player Stats</h2>
  <ExcelButton
    getData={() => filteredData}
    filename="PlayerStats.xlsx"
  />
</div>

      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedRank={selectedRank}
        onRankChange={setSelectedRank}
      />

      <PlayerTable
        data={paginatedData}
        onSort={handleSort}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
  {[
    {
      title: '🏆 Win Champion',
      description: 'Most total victories among filtered players',
      player: filteredData.reduce((top, p) => (p.wins > top.wins ? p : top), filteredData[0]),
      bg: 'bg-gradient-to-r from-yellow-500 to-yellow-700'
    },
    {
      title: '🧠 XP Master',
      description: 'Highest overall level across all modes',
      player: filteredData.reduce((top, p) => (p.level > top.level ? p : top), filteredData[0]),
      bg: 'bg-gradient-to-r from-purple-500 to-purple-700'
    },
    {
      title: '💪 All-Rounder',
      description: 'Top combo of wins and level',
      player: filteredData.reduce((top, p) => (
        (p.level + p.wins > top.level + top.wins) ? p : top
      ), filteredData[0]),
      bg: 'bg-gradient-to-r from-teal-500 to-teal-700'
    },
  ].map((badge, i) => (
    <div key={i} className={`rounded-xl p-4 shadow-lg ${badge.bg} hover:scale-105 transition-transform`}>
      <h3 className="text-lg font-bold">{badge.title}</h3>
      <p className="text-sm italic mb-2">{badge.description}</p>
      <div className="text-2xl">{badge.player?.name || 'N/A'}</div>
      <div className="text-sm mt-1 opacity-90">
        🏅 Wins: {badge.player?.wins} | 🎯 Level: {badge.player?.level}
      </div>
    </div>
  ))}
</div>

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

export default PlayerStats;
