
import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import './style.scss'
import { NavDropdown, NavDropdownLink } from './NavDropdown'

const NavItem = (props) => (
  <div className='nav-item mx-md-1 mx-lg-2'>
    { props.children }
  </div>
)

const NavLink = (props) => (
  <NavItem>
    {
    /* if prop {external} provide, use <a> tag for external link */
      (typeof props.external === 'undefined')
        ? <Link to={props.to} className='nav-link'>{ props.children }</Link>
        : <a href={props.to} target='_blank' className='nav-link' >{ props.children }</a>
    }
  </NavItem>
)

class NavbarContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: false }
  }
  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-custom'>
        <div className='navbar-brand brand'>
          <Link to='/'>NCTU+</Link>
        </div>
        <button
          className='navbar-toggler mx-2'
          type='button'
          onClick={() => this.setState({ show: !this.state.show })}
        >
          <i className='fa fa-bars' />
        </button>
        <div className={`collapse navbar-collapse ${this.state.show && 'show'}`}>
          <div className='navbar-nav mr-auto'>
            <NavDropdown title='全校課程'>
              <NavDropdownLink to='/courses'>全校課程</NavDropdownLink>
              <NavDropdownLink to='/comments'>心得</NavDropdownLink>
              <NavDropdownLink to='/past_exams'>考古題</NavDropdownLink>
              <NavDropdownLink to='/courses/tutorial'>選課教學</NavDropdownLink>
            </NavDropdown>
            <NavLink to='/courses/simulation'>模擬排課</NavLink>
            <NavLink to='/books'>二手書</NavLink>
            <NavLink to='/events'>活動吧</NavLink>
            <NavLink external to='https://plus.nctu.edu.tw/newcomer/'>網路新生包</NavLink>
          </div>
          <div className='navbar-nav'>
            <NavLink external to='https://www.facebook.com/messages/t/nctuplus' target='_blank'>
              問題回報
            </NavLink>
            <NavLink to='/login'>登入</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

const Navbar = (props) => (
  <div className='navbar-container'>
    <MediaQuery minDeviceWidth={768} >
      <div className='container'><NavbarContent /></div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={767} >
      <NavbarContent />
    </MediaQuery>
  </div>
)

export default Navbar
