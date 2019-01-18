
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.scss'

const BulletinNavbar = props => (
  <div className={classNames('nav', 'nav-pills', styles.navPills)}>
    <Link
      className={classNames(
        'nav-item',
        'nav-link',
        'col-12',
        'text-center',
        styles.navLink,
        props.url === '/admin/bulletin' && styles.navLinkActive
      )}
      to='/admin/bulletin'
    >
      全部文章
    </Link>
    <Link
      className={classNames(
        'nav-item',
        'nav-link',
        'col-12',
        'text-center',
        styles.navLink,
        props.url === '/admin/bulletin/latest_news' && styles.navLinkActive
      )}
      to='/admin/bulletin/latest_news'
    >
      最新消息
    </Link>
    <Link
      className={classNames(
        'nav-item',
        'nav-link',
        'col-12',
        'text-center',
        styles.navLink,
        props.url === '/admin/bulletin/website_revision' && styles.navLinkActive
      )}
      to='/admin/bulletin/website_revision'
    >
      網站改版
    </Link>
    <Link
      className={classNames(
        'nav-item',
        'nav-link',
        'col-12',
        'text-center',
        styles.navLink,
        props.url === '/admin/slogan' && styles.navLinkActive
      )}
      to='/admin/slogan'
    >
      首頁標語
    </Link>
    <Link
      className={classNames(
        'nav-item',
        'nav-link',
        'col-12',
        'text-center',
        styles.navLink,
        props.url === '/admin/background' && styles.navLinkActive
      )}
      to='/admin/background'
    >
      首頁背景
    </Link>
  </div>
)

export default BulletinNavbar
