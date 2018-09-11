
import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { withState, withHandlers, compose } from 'recompose'
import { NavDropdown, NavDropdownLink } from './NavDropdown'
import { logout } from 'api/controller'
import './style.scss'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser })
const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) })
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('show', 'setDropdown', false),
  withHandlers({ toggleDropdown: ({ setDropdown, show }) => () => setDropdown(!show) })
)

const NavItem = ({ children }) => (
  <div className='nav-item mx-md-1 mx-lg-2'>
    { children }
  </div>
)

const NavLink = ({ external, to, children }) => (
  <NavItem>
    {
    /* if prop {external} provide, use <a> tag for external link */
      (typeof external === 'undefined')
        ? <Link to={to} className='nav-link'>{ children }</Link>
        : <a href={to} target='_blank' className='nav-link' >{ children }</a>
    }
  </NavItem>
)

const NavbarContent = enhance(({ toggleDropdown, show, currentUser, logout }) => (
  <nav className='navbar navbar-expand-md navbar-custom pt-1'>
    <div className='navbar-brand brand'>
      <Link to='/'>NCTU+</Link>
    </div>
    <button
      className='navbar-toggler mx-2'
      type='button'
      onClick={toggleDropdown}
    >
      <i className='fa fa-bars' />
    </button>
    <div className={`collapse navbar-collapse ${show && 'show'}`}>
      <div className='navbar-nav mr-auto'>
        {
          currentUser && currentUser.role === 1
            ? <NavDropdown title='管理'>
              <NavDropdownLink to='/admin/bulletin'>公布欄</NavDropdownLink>
              <NavDropdownLink to='/admin/users'>使用者</NavDropdownLink>
              <NavDropdownLink to='/admin/statistics'>統計資料</NavDropdownLink>
              <NavDropdownLink to='/admin/departments'>系所管理</NavDropdownLink>
              <NavDropdownLink to='/admin/course_maps'>課程地圖</NavDropdownLink>
            </NavDropdown>
            : null
        }
        <NavDropdown title='全校課程'>
          <NavDropdownLink to='/courses'>全校課程</NavDropdownLink>
          <NavDropdownLink to='/comments'>心得</NavDropdownLink>
          <NavDropdownLink to='/past_exams'>考古題</NavDropdownLink>
          <NavDropdownLink to='/courses/tutorial'>選課教學</NavDropdownLink>
        </NavDropdown>
        <NavLink to='/courses/simulation'>模擬排課</NavLink>
        <NavLink to='/books'>二手書</NavLink>
        <NavLink to='/events'>活動吧</NavLink>
      </div>
      <div className='navbar-nav'>
        <NavLink external to='https://www.facebook.com/messages/t/nctuplus' target='_blank'>
          問題回報
        </NavLink>
        {
          currentUser
            ? <NavDropdown title={
              <span>
                <i className='fa fa-user-circle' />
                <span className='ml-2 user-name'>{ currentUser.name }</span>
              </span>
            }>
              <span className='dropdown-item' onClick={logout}>
                  登出
              </span>
            </NavDropdown>
            : <NavLink to='/login'>登入</NavLink>
        }
      </div>
    </div>
  </nav>
))

const Navbar = () => (
  <div className='navbar-container'>
    <MediaQuery minDeviceWidth={768} >
      <div className='container'>
        <NavbarContent />
      </div>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={767} >
      <NavbarContent />
    </MediaQuery>
  </div>
)

export default Navbar
