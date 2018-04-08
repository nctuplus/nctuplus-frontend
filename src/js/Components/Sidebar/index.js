
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const SidebarItem = (props) => (
  <li className={classNames('item', 'text-center', props.active && 'active')}>
    <a >{ props.children }</a>
  </li>
)

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar d-none d-md-block'>
        <ul className='nav'>
          { this.props.children }
        </ul>
      </div>
    )
  }
}

export { Sidebar, SidebarItem }
