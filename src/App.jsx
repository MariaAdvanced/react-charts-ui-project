import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { routesConfig } from './constants/routesConfig';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routesConfig.map(({ path, element }) => (
            <Route key={path || 'index'} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
