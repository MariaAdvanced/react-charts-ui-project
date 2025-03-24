import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const today = new Date();
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(startOfMonth);
  const [endDate, setEndDate] = useState(endOfMonth);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (onDateChange && start && end) {
      onDateChange({ start, end });
    }
  };

  return (
    <div className="mb-4 flex items-center gap-4">
      <label className="text-sm font-semibold text-gray-700">Date Range:</label>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="yyyy-MM-dd"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-indigo-400 text-sm"
      />
    </div>
  );
};

export default DateRangePicker;
