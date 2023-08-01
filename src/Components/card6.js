import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import './card6.css';
function card6() {
  return (
    <div>
        < div className='card6'>
            < FontAwesomeIcon icon={faGavel} className='gavel'/>
            <h2 className='acts'>0 <br/> ACTS</h2>
        </div>
    </div>
  )
}

export default card6