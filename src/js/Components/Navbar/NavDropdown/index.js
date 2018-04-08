
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import './style.scss'

const NavDropdownLink = withRouter((props) => (
  <span className='dropdown-item'
    onTouchTap={() => props.history.push(props.to)}
    onClick={() => props.history.push(props.to)}
  >
    { props.children }
  </span>
))

class NavDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  render () {
    return (
      <div
        className='nav-item dropdown clickable'
        onMouseOver={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}
      >
        <a
          className={classNames('nav-link', 'dropdown-toggle', this.state.open && 'show')}
          onTouchTap={() => this.setState({ open: !this.state.open })}
        >
          { this.props.title }
        </a>
        <div className={classNames('dropdown-menu', this.state.open && 'show')} >
          { this.props.children }
        </div>
      </div>
    )
  }
}

export { NavDropdown, NavDropdownLink }
