
import React from 'react'
import './style.scss'

const Layout = ({className, children}) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  return (
    <div className={`page-wrapper ${className || ''}`} >
      { children }
    </div>
  )
}

export default Layout
