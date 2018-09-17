
import React from 'react'
import styles from './style.scss'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout = ({ className, children }) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  return (
    <div>
      <Navbar />
      <div className={`${styles.pageWrapper} ${className || ''}`} >
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout
