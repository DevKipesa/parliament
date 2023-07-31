import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faSun, faUsers } from '@fortawesome/free-solid-svg-icons';
import './card1.css';
function card1() {
  return (
    <div>
        < div className='card1'>

            <h3 className='latest'>LATEST SESSION</h3>
          < div className='house'>
            <h2>< FontAwesomeIcon icon={faSun} className='fasun' /> Morning Session</h2>
            <h2>< FontAwesomeIcon icon={faCalendar} className='facalendar' /> Mon, March 20th 2023</h2>
            <h2 > < FontAwesomeIcon icon={faClock} className='faclock' /> 03/20/2023</h2>
          </div>
          < div className='commitee'>
            <h2>< FontAwesomeIcon icon={faSun} className='fasun' /> Afternoon Session</h2>
            <h2>< FontAwesomeIcon icon={faCalendar} className='facalendar' /> Mon,March 27th 2023</h2>
            <h2>< FontAwesomeIcon icon={faClock} className='faclock' /> 03/27/2023</h2>
          </div>
          <div className='joint'>
            <h2>< FontAwesomeIcon icon={faUsers} className='fausers' /> Joint Health And Budget</h2>
            <h2>< FontAwesomeIcon icon={faCalendar} className='facalendar' /> Thur, March 30th 2023</h2>
            <h2>< FontAwesomeIcon icon={faClock} className='faclock' /> 03/30/2023</h2>
          </div>
      </div>
    </div>
  )
}

export default card1