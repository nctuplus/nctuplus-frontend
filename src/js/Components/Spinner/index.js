
import React from 'react'

const Spinner = (props) => (
  <span style={{ fontSize: props.size || 16, color: props.color || 'white' }} >
    <i className='fa fa-circle-o-notch fa-spin' />
  </span>
)

export default Spinner
