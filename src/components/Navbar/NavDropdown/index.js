
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import styles from './style.scss'

const NavDropdownLink = withRouter((props) => (
  <span className={`dropdown-item ${styles.dropdownItem}`} onClick={() => props.history.push(props.to)}>
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
        className={`nav-item dropdown ${styles.dropdown} clickable`}
        onMouseOver={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}
      >
        <a
          className={classNames('nav-link', ' dropdown-toggle', this.state.open && 'show')}
          // onClick={() => this.setState({ open: !this.state.open })}
        >
          { this.props.title }
        </a>
        <div className={classNames('dropdown-menu', styles.dropdownMenu, this.state.open && 'show')} >
          { this.props.children }
        </div>
      </div>
    )
  }
}

export { NavDropdown, NavDropdownLink }
