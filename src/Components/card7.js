import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import './card7.css';
function card7() {
  return (
    <div>
        < div className='card7'>
            <FontAwesomeIcon icon={faFileArchive} className='arch'/>
            <h2 className='laid'>0 <br/> PAPERS LAID</h2>
        </div>
    </div>
  )
}

export default card7