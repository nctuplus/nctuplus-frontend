
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.scss'

const checkMatch = (url, match) =>
  classNames(styles.tab, 'p-2', 'flat-link', 'd-inline-block', url === match && ' active')

const UserNavigation = (props) => (
  <div className='m-2'>
    <div className={`${styles.userNav} bg-white pl-3`}>
      <Link className={checkMatch(props.match.params.url, 'profile')} to='/user/profile'>
        <i className='fa fa-user mx-1' />個人檔案
      </Link>
      <Link className={checkMatch(props.match.params.url, 'courses')} to='/user/courses'>
        <i className='fa fa-calendar mx-1' />歷年課程
      </Link>
      <Link className={checkMatch(props.match.params.url, 'collections')} to='/user/collections'>
        <i className='fa fa-heart mx-2' />收藏課表
      </Link>
    </div>
  </div>
)

export { UserNavigation }
