
import React from 'react'
import './style.scss'

const PageWrapper = ({className, ...props}) => {
  window.scroll(0, 0)
  return (
    <div className={`page-wrapper ${className || ''}`} >
      { props.children }
    </div>
  )
}

export default PageWrapper
