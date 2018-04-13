
import React from 'react'
import './style.scss'

const PageWrapper = ({className, ...props}) => (
  <div className={`page-wrapper ${className || ''}`} >
    { props.children }
  </div>
)

export default PageWrapper
