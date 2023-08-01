import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './card3.css';
function card3() {
  return (
    <div>
      < div className='card3'>
        <FontAwesomeIcon icon={faBalanceScale} className='famon'></FontAwesomeIcon>
        <h2 className='bills'>0 <br/> BILLS</h2>
      </div>
    </div>
  )
}

export default card3