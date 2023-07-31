import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import './card2.css';
function card2() {
  return (
    <div>
        < div className='card2'>
            < FontAwesomeIcon icon={faFile} className='fafile' />
            <h2 className='pape'>0 <br/> ORDER PAPERS</h2>
        </div>
    </div>
  )
}

export default card2