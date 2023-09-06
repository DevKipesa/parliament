import React from 'react'
import "./livesession.css";
import Meetings  from "./meetings"
function LiveSession() {
  return (
    <div>
      < div className='meet'>
        <h2>MeetinGs</h2>
      </div>
      <Meetings/>
      <Meetings/>
    </div>
  )
}

export default LiveSession