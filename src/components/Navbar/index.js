
import React from 'react'
import { Link } from 'react-router-dom'
import { withState, withHandlers, compose } from 'recompose'
import { NavDropdown, NavDropdownLink } from './NavDropdown'
import { logout } from 'api/Controllers/user'
import styles from './style.scss'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser })
const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) })
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('show', 'setDropdown', false),
  withHandlers({ toggleDropdown: ({ setDropdown, show }) => () => { setDropdown(!show); if (!show) { document.body.style.overflowY = 'hidden' } else { document.body.style.overflowY = 'auto' } } })
)

const NavItem = ({ children }) => (
  <div className={styles.navItem}>
    { children }
  </div>
)

const NavLink = ({ external, to, children }) => (
  <NavItem>
    {
    /* if prop {external} provide, use <a> tag for external link */
      (typeof external === 'undefined')
        ? <Link to={to} className={`nav-link ${styles.navLink}`}>{ children }</Link>
        : <a href={to} target='_blank' className={`nav-link ${styles.navLink}`} >{ children }</a>
    }
  </NavItem>
)

const Navbar = enhance(({ toggleDropdown, show, currentUser, logout }) => (
  <nav className={styles.navbar}>
    <div className={`${styles.navList} ${show && styles.show}`}>
      <div className={styles.leftList}>
        <div className={styles.brand}>
          <Link to='/'>NCTU+</Link>
        </div>
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
        <NavDropdown title='課程資訊'>
          <NavDropdownLink to='/courses'>全校課程</NavDropdownLink>
          <NavDropdownLink to='/comments'>心得</NavDropdownLink>
          <NavDropdownLink to='/past_exams'>考古題</NavDropdownLink>
          {/* <NavDropdownLink to='/courses/tutorial'>選課教學</NavDropdownLink> */}
        </NavDropdown>
        <NavLink to='/courses/simulation'>模擬排課</NavLink>
        <NavLink to='/books'>二手書</NavLink>
        <NavLink to='/events'>活動吧</NavLink>
      </div>
      <div className={styles.rightList}>
        {/* <NavLink external to='https://www.facebook.com/messages/t/nctuplus' target='_blank'>
            問題回報
        </NavLink> */}
        {
          currentUser
            ? <NavDropdown title={
              <span>
                <i className='fa fa-user-circle' />
                <span className={`ml-2 ${styles.userName}`}>{ currentUser.name }</span>
              </span>
            }>
              <NavDropdownLink to='/user/profile'>個人資料</NavDropdownLink>
              <div className={`${styles.dropdown} dropdown-item`} onClick={logout}>
                  登出
              </div>
            </NavDropdown>
            : <NavLink to='/login'>登入</NavLink>
        }
      </div>
    </div>
    <div className={`${styles.hamburgerIcon} ${show && styles.show}`} onClick={toggleDropdown} >
      <div />
      <div />
      <div />
    </div>
  </nav>
))

export default Navbar
