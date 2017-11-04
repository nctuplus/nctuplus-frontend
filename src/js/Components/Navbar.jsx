
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownLink } from './Dropdown'

const NavItem = (props) => (
  <div className='item'>
    { props.children }
  </div>
)

const NavLink = (props) => (
  <div className='item'>
    {
    /* if prop {external} provide, use <a> tag for external link */
    (typeof props.external === 'undefined')
    ? <Link to={props.to} className='links'>{ props.children }</Link>
    : <a href={props.to} className='links' >{ props.children }</a>
  }
  </div>
)

const Navbar = (props) => (
  <div className='container navbar'>
    <Grid fluid>
      <Row>
        <Col lg={6} lgOffset={2}>
          <div className='title'>
            <Link to='/'>NCTU+</Link>
          </div>
          <NavItem>
            <Dropdown title='全校課程'>
              <DropdownLink to='/courses'>全校課程</DropdownLink>
              <DropdownLink to='/discusses'>心得</DropdownLink>
              <DropdownLink to='/past_exams'>考古題</DropdownLink>
              <DropdownLink to='/courses/tutorial'>選課教學</DropdownLink>
            </Dropdown>
          </NavItem>
          <NavLink to='/courses/simulation'>模擬排課</NavLink>
          <NavLink to='/books'>二手書</NavLink>
          <NavLink to='/events'>活動吧</NavLink>
          <NavLink external to='https://plus.nctu.edu.tw/newcomer/'>網路新生包</NavLink>
        </Col>
        <Col lg={3} >
          <NavItem>
            <a
              className='links'
              href='https://www.facebook.com/messages/t/nctuplus'
              target='_blank'
            >
              問題回報
            </a>
          </NavItem>
          <NavItem><a className='links clickable'>課程收藏</a></NavItem>
          <NavLink to='/login'>登入</NavLink>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Navbar
