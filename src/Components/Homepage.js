import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faVoteYea, faBroadcastTower, faTasks, faFolderOpen, faUsers, faSearch, faBullhorn, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';
import logo from '../images/logo.png';

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
      <div className="background-images">
        <div className='Dashboard'>
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        </div>
        
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="module">
          <Link className='Link' to="/HouseBusiness">
            <h3><FontAwesomeIcon icon={faBuilding} /> House Business</h3>
            </Link>
          </div>
          <div className="module">
          <Link className='Link' to="/Voting">
            <h3><FontAwesomeIcon icon={faVoteYea} /> Voting</h3>
            </Link>
          </div>
          <div className="module">
          <Link className='Link' to="/LiveSession">
            <h3><FontAwesomeIcon icon={faBroadcastTower} /> Live Session</h3>
            </Link>
          </div>
          <div className="module">
            <Link className='Link' to="/ActionItems">
            <h3><FontAwesomeIcon icon={faTasks} /> Action Items</h3>
            </Link>
          </div>
          <div className="module">
            <Link className='Link' to="/DocumentLibrary">
            <h3><FontAwesomeIcon icon={faFolderOpen} /> Document Library</h3>
            </Link>
          </div>
          <div className="module">
            <Link className='Link' to="Directory">
            <h3><FontAwesomeIcon icon={faUsers} /> Directory</h3>
            </Link>
          </div>
          <div className="module">
            <Link className='Link' to="/ReviewRoom">
            <h3><FontAwesomeIcon icon={faSearch} /> Review Room</h3>
            </Link>
          </div>
          <div className="module">
            < Link className='Link' to="/Announcements">
            <h3><FontAwesomeIcon icon={faBullhorn} /> Announcements</h3>
            </Link>
          </div>
          <div className="module">
            <Link className='Link' to="/CommitteeReports">
              <h3><FontAwesomeIcon icon={faClipboardList} /> Committee Reports</h3>
            </Link>
          </div>
          <div className='mission'>
          <h3>MISSION: TO REPRESENT THE INTERESTS OF THE KENYAN PEOPLE, ENACT LAWS, AND OVERSEE THE ACTIONS OF THE GOVERNMENT.<br/> VISION: TO BE AN EFFECTIVE AND INDEPENDENT LEGISLATURE THAT PROMOTES DEMOCRACY, UPHOLDS THE RULE OF LAW, AND SAFEGUARDS THE RIGHTS AND WELFARE OF THE PEOPLE OF KENYA.</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
