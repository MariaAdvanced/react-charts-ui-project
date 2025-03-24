import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DarkModeToggle from '../components/DarkModeToggle'; 


const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <DarkModeToggle />
        </div>
        
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
