import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faVoteYea,
  faBroadcastTower,
  faTasks,
  faFolderOpen,
  faUsers,
  faSearch,
  faBullhorn,
  faClipboardList,
  faUpload,
  faCodeBranch,
  faTags,
  faComments,
  faCommentsDollar,
  faGavel,
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import logo from '../images/logo.png';

const Submodule = ({ to, icon, title }) => (
  <Link className="Link" to={to}>
    <h4>
      <FontAwesomeIcon icon={icon} /> {title}
    </h4>
  </Link>
);

const DocumentLibrary = () => {
  const [showSubmodules, setShowSubmodules] = useState(false);

  const handleToggleSubmodules = () => {
    setShowSubmodules(!showSubmodules);
  };

  return (
    < div className='lib'>
    <div className="module Doc1">
      <div className="dropdown" onClick={handleToggleSubmodules}>
        <h3>
          <FontAwesomeIcon icon={faFolderOpen} /> Document Library
        </h3>
        {showSubmodules && (
          <div className="submodules">
            <Submodule to="/Upload" icon={faUpload} title="Upload and Storage" />
            <Submodule to="/VersionControl" icon={faCodeBranch} title="Version Control and Document Revision History" />
            <Submodule to="/DocumentCategorization" icon={faTags} title="Document Categorization and Tagging" />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

const AnnouncementsSubmodule = () => {
  const [showSubmodules, setShowSubmodules] = useState(false);

  const handleToggleSubmodules = () => {
    setShowSubmodules(!showSubmodules);
  };

  return (
    < div className='ments'>
    <div className="module Doc1">
      <div className="dropdown" onClick={handleToggleSubmodules}>
        <h3>
          <FontAwesomeIcon icon={faBullhorn} /> Announcements
        </h3>
        {showSubmodules && (
          <div className="submodules">
            <Submodule to="/Chat" icon={faComments} title="Chat and Messaging" />
            <Submodule to="/DiscussionForums" icon={faCommentsDollar} title="Discussion Forums" />
            <Submodule to="/Announcements" icon={faBullhorn} title="Announcement" /> {/* Updated icon */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
const CommitteeSubmodule = () => {
  const [showSubmodules, setShowSubmodules] = useState(false);

  const handleToggleSubmodules = () => {
    setShowSubmodules(!showSubmodules);
  };

  return (
    < div className="com">
    <div className="module Doc1">
      <div className="dropdown" onClick={handleToggleSubmodules}>
        <h3>
          <FontAwesomeIcon icon={faUsers} /> Committee
        </h3>
        {showSubmodules && (
          <div className="submodules">
            <Submodule to="/Committee" icon={faUsers} title="Committee" />
            <Submodule to="/CommitteeReports" icon={faClipboardList} title="Committee Reports" />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

          
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
      <div className='legg'>
          <div className='icon'>
      <FontAwesomeIcon icon={faGavel} className="input-icon" /></div>
      <span className="text">  LEGISLATIVE INFORMATION MANAGEMENT SYSTEM</span>
      </div>
      <div className="back">
      <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        <div className="Dashboard">

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
          <div className='modules'>
          <div className="module">
            <Link className="Link" to="/HouseBusiness">
              <h3>
                <FontAwesomeIcon icon={faBuilding} /> House Business
              </h3>
            </Link>
          </div>
          <div className="module">
            <Link className="Link" to="/Voting">
              <h3>
                <FontAwesomeIcon icon={faVoteYea} /> Voting
              </h3>
            </Link>
          </div>
          <div className="module">
            <Link className="Link" to="/LiveSession">
              <h3>
                <FontAwesomeIcon icon={faBroadcastTower} /> Live Session
              </h3>
            </Link>
          </div>
          <div className="module">
            <Link className="Link" to="/ActionItems">
              <h3>
                <FontAwesomeIcon icon={faTasks} /> Action Items
              </h3>
            </Link>
          </div>
          <div className="module">
            <DocumentLibrary />
          </div>
          < div className='tory'>
          <div className="module">
            <Link className="Link" to="/Directory">
              <h3>
                <FontAwesomeIcon icon={faUsers} /> Directory
              </h3>
            </Link>
          </div>
          </div>
          <div className="module">
            <Link className="Link" to="/ReviewRoom">
              <h3>
                <FontAwesomeIcon icon={faSearch} /> Review Room
              </h3>
            </Link>
          </div>
          <div className="module">
            <AnnouncementsSubmodule />
          </div>
          <div className="module">
          <CommitteeSubmodule />
          </div>
          </div>
          <div className="mission">
          </div>
        </div>
        < div className="mission">
        <h4>
              MISSION: TO REPRESENT THE INTERESTS OF THE KENYAN PEOPLE, ENACT LAWS, AND OVERSEE THE ACTIONS OF THE
              GOVERNMENT.
              <br /> VISION: TO BE AN EFFECTIVE AND INDEPENDENT LEGISLATURE THAT PROMOTES DEMOCRACY, UPHOLDS THE RULE OF
              LAW, AND SAFEGUARDS THE RIGHTS AND WELFARE OF THE PEOPLE OF KENYA.
            </h4>
            </div>
      </div>
    </div>
  );
};

export default Homepage;
