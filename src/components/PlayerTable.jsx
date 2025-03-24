import React from 'react';

const PlayerTable = ({ data, onSort, sortBy, sortDirection }) => {
  const handleSort = (key) => {
    onSort(key);
  };

  const getArrow = (key) => {
    if (sortBy !== key) return '';
    return sortDirection === 'asc' ? '▲' : '▼';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-300">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
          <tr>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('name')}>
              Name {getArrow('name')}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('rank')}>
              Rank {getArrow('rank')}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('wins')}>
              Wins {getArrow('wins')}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => handleSort('level')}>
              Level {getArrow('level')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((player) => (
            <tr
              key={player.id}
              className="border-t border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <td  className="p-2 text-gray-800 dark:text-white">{player.name}</td>
              <td className="p-2 text-gray-800 dark:text-white">{player.rank}</td>
              <td  className="p-2 text-gray-800 dark:text-white">{player.wins}</td>
              <td  className="p-2 text-gray-800 dark:text-white">{player.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
