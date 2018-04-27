
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const SidebarItem = (props) => (
  <li
    onClick={props.onClick}
    className={classNames('item', 'text-center', props.active && 'active')}
  >
    <a >{ props.children }</a>
  </li>
)

const Sidebar = (props) => (
  <div className='sidebar d-none d-md-block'>
    <ul className='nav'>
      { props.children }
    </ul>
  </div>
)

export { Sidebar, SidebarItem }
