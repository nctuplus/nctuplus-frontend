
import React from 'react'
import './style.scss'

const Modal = (props) => (
  <div className='modal d-block' onClick={props.close}>
    <div className='modal-dialog modal-dialog-centered'>
      <div className='modal-content border-0 rounded-0' onClick={(event) => { event.stopPropagation() }}>
        {props.children}
      </div>
    </div>
  </div>
)

export default Modal
