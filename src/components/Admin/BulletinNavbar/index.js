
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './style.scss'

const BulletinNavbar = props => (
  <div className='nav nav-pills bulletin-nav'>
    <div className='nav-item m-auto'>
      <Link
        className={classNames('nav-link', 'px-5', props.url === '/admin/bulletin' && 'active')}
        to='/admin/bulletin'
      >
        全部文章
      </Link>
    </div>
    <div className='nav-item m-auto'>
      <Link
        className={classNames('nav-link', 'px-5', props.url === '/admin/bulletin/latest_news' && 'active')}
        to='/admin/bulletin/latest_news'
      >
        最新消息
      </Link>
    </div>
    <div className='nav-item m-auto'>
      <Link
        className={classNames('nav-link', 'px-5', props.url === '/admin/bulletin/website_revision' && 'active')}
        to='/admin/bulletin/website_revision'
      >
        網站改版
      </Link>
    </div>
    <div className='nav-item m-auto'>
      <Link
        className={classNames('nav-link', 'px-5', props.url === '/admin/slogan' && 'active')}
        to='/admin/slogan'
      >
        首頁標語
      </Link>
    </div>
    <div className='nav-item m-auto'>
      <Link
        className={classNames('nav-link', 'px-5', props.url === '/admin/background' && 'active')}
        to='/admin/background'
      >
        首頁背景
      </Link>
    </div>
  </div>
)

export default BulletinNavbar
