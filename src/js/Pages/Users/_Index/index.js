
import React from 'react'
import './style.scss'

const _Index = (props) => (
  <div className='page-wrapper user'>
    <div className='container pt-3'>
      { props.children }
    </div>
  </div>
)

export default _Index
