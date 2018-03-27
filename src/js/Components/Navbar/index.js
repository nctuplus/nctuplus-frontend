
import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import { EntypoMenu } from 'react-entypo'
import './style.scss'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }
  openDropdown (e) {
    let dd = ReactDOM.findDOMNode(this.refs.dd_list)
    dd.style.display = 'block'
  }
  closeDropdown (e) {
    let dd = ReactDOM.findDOMNode(this.refs.dd_list)
    dd.style.display = 'none'
  }

  render () {
    return (
      <span className='dropdown'
        onMouseOver={this.openDropdown}
        onMouseLeave={this.closeDropdown}
      >
        <a className='links clickable' >
          {this.props.title}
          <span className='caret' />
        </a>
        <div
          className='list'
          ref='dd_list'
          style={{ display: 'none' }}
        >
          { this.props.children }
        </div>
      </span>
    )
  }
}

const DropdownLink = withRouter((props) => (
  <span className='item' onClick={() => props.history.push(props.to)}>
    { props.children }
  </span>
))

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

const NavbarSmUp = (props) => (
  <Grid>
    <Row>
      <Col sm={9} md={9} lg={10}>
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
      <Col sm={3} md={3} lg={2}>
        <NavItem>
          <a
            className='links'
            href='https://www.facebook.com/messages/t/nctuplus'
            target='_blank'
          >
            問題回報
          </a>
        </NavItem>
        <NavLink to='/login'>登入</NavLink>
      </Col>
    </Row>
  </Grid>
)

class NavbarSmDown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }
  toggleDropdown () {
    this.setState({ open: !this.state.open })
  }
  render () {
    return (
      <div>
        <div className='title inline-block'>
          <Link to='/'>NCTU+</Link>
        </div>
        <div className='menu inline-block' onClick={() => this.toggleDropdown()}>
          <EntypoMenu />
        </div>
        <div hidden={!this.state.open} >
          <NavLink to='/login'>登入</NavLink>
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
          <NavItem>
            <a
              className='links'
              href='https://www.facebook.com/messages/t/nctuplus'
              target='_blank'
            >
              問題回報
            </a>
          </NavItem>
        </div>
      </div>
    )
  }
}

const Navbar = (props) => (
  <div className='container navbar'>
    <MediaQuery minDeviceWidth={768}>
      <NavbarSmUp />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={768}>
      <NavbarSmDown />
    </MediaQuery>

  </div>
)

export default Navbar
