
import React from 'react'
import styles from './style.scss'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { withRouter } from 'react-router'

class _Layout extends React.Component {
  componentDidMount () {
    const { scroll = true } = this.props
    if (scroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
  render () {
    const { className, children } = this.props

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
}
const Layout = withRouter(_Layout)
export default Layout
