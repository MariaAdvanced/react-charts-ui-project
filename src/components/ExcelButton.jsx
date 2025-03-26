import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaFileExcel } from 'react-icons/fa';

const ExcelButton = ({ getData, filename = 'export.xlsx' }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (isExporting) return;

    setIsExporting(true);
    const data = await getData(); 

    if (!data || data.length === 0) {
      setIsExporting(false);
      return;
    }

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    saveAs(blob, filename);
    setTimeout(() => setIsExporting(false), 2000);
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`flex items-center gap-2 px-4 py-2 rounded text-white font-semibold transition ${
        isExporting ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
      }`}
    >
      <FaFileExcel className="text-xl" />
      {isExporting ? 'Exporting...' : 'Export to Excel'}
    </button>
  );
};

export default ExcelButton;
