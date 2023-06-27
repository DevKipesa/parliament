import React from 'react';
import Homepage from './Components/Homepage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import CommitteeReports from './Components/CommitteeReports';
import Announcements from './Components/Announcements';
import ReviewRoom from './Components/ReviewRoom';
import Directory from './Components/Directory';
import DocumentLibrary from './Components/DocumentLibrary';
import ActionItems from './Components/ActionItems';
import LiveSession from './Components/LiveSession';
import Voting from './Components/Voting';
import HouseBusiness from './Components/HouseBusiness';
import Upload from './Components/Upload';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CommitteeReports" element={<CommitteeReports />} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/ReviewRoom" element={<ReviewRoom/>} />
        <Route path="/Directory" element={<Directory />} />
        <Route path="/DocumentLibrary" element={<DocumentLibrary />} />
        <Route path="/ActionItems" element={<ActionItems />} />
        <Route path="/LiveSession" element={<LiveSession/>} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/HouseBusiness" element={<HouseBusiness />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </Router>
    
  );
}

export default App;