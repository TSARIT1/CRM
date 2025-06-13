import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import DealCreationPage from './DealCreationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/CreateDeal" element={<DealCreationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
