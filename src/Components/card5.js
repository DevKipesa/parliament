import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './card5.css';
function card5() {
  return (
    <div>
        < div className='card5'>
          <FontAwesomeIcon icon={faBook} className='book'/>
            <h2 className='pet'>0 <br/> PETITIONS</h2>
        </div>
    </div>
  )
}

export default card5