import React from 'react';
import Homepage from './Components/Homepage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import CommitteeReports from './Components/CommitteeReports';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CommitteeReports" element={<CommitteeReports />} />
      </Routes>
    </Router>
    
  );
}

export default App;