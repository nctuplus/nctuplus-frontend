
import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

const SidebarItem = (props) => (
  <li
    onClick={props.onClick}
    className={classNames(styles.item, 'text-center', props.active && 'active')}
  >
    <a >{ props.children }</a>
  </li>
)

const Sidebar = (props) => (
  <div className={`${styles.sidebar} d-none d-md-block`}>
    <ul className='nav'>
      { props.children }
    </ul>
  </div>
)
/* =====================

   A: SidebarWrapper
   B: SearchPanel
   C: SidebarPusher

          A
   _________________
   |  B        C   |
   | ---- ---------|
   | |  | |       ||
   | |  | |       ||
   | |  | |       ||
   | |  | |       ||
   | ---- ---------|
   | ______________|

======================= */
const SidebarWrapper = (props) => (
  <div className={styles.sidebarWrapper}>
    {props.children}
  </div>
)

const SidebarPusher = (props) => (
  <div className={styles.sidebarPusher}>
    {props.children}
  </div>
)

export { Sidebar, SidebarItem, SidebarWrapper, SidebarPusher }
