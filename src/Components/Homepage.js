import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faVoteYea, faBroadcastTower, faTasks, faFolderOpen, faUsers, faSearch, faBullhorn, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
    // Display the corresponding contents based on the search term
    // You can update the state or navigate to a different page as needed
  };
  return (
    <div>
      <div className='Dashboard'>
    <div className="search-box">
      <input type="text" placeholder="Search" 
      value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
    </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faBuilding} /> House Business</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faVoteYea} /> Voting</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faBroadcastTower} /> Live Session</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faTasks} /> Action Items</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faFolderOpen} /> Document Library</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faUsers} /> Directory</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faSearch} /> Review Room</h3>
        </div>
        <div className="module">
          <h3><FontAwesomeIcon icon={faBullhorn} /> Announcements</h3>
        </div>
        <div className="module">
        <Link className='Link' to="/CommitteeReports">
          <h3><FontAwesomeIcon icon={faClipboardList} /> Committee Reports</h3>
          </Link>
        </div>
        
        
      </div>
      
    </div>
  );
};

export default Homepage;
