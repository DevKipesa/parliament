import React from 'react';
import './livesession.css';
function LiveSession() {
  const sessionDetails = {
    date: 'September 10, 2023',
    time: '3:00 PM - 4:30 PM',
  };
  const handleAttendMeeting =()=>{
    console.log("Attend meeting clicked")
  }

  return (
    <div>
      < div className='live'>
      < div className='session'>
    <h2 className='details'>Session Details</h2>
    <p>Date: {sessionDetails.date}</p>
    <p>Time: {sessionDetails.time}</p>
   </div>
   < div className='button'>
   <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">
    <button onClick={handleAttendMeeting}>Attend Meeting</button>
    </a>
   </div>
   </div>
    </div>
  )
}

export default LiveSession
