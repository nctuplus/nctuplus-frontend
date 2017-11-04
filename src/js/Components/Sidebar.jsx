
import React from 'react'

class SidebarItem extends React.Component {
  render () {
    let className = 'flat-link' + (this.props.active ? ' active' : '')
    return (
      <li className='item text-center'>
        <a className={className}>{this.props.children}</a>
      </li>
    )
  }
}

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar'>
        <ul className='nav'>
          { this.props.children }
        </ul>
      </div>
    )
  }
}

export { Sidebar, SidebarItem }
