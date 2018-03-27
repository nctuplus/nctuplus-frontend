
import React from 'react'
import { Link } from 'react-router-dom'

const checkMatch = (url, match) =>
  'tab flat-link inline-block' + (url === match ? ' active' : '')

const UserNavigation = (props) => (
  <div>
    <div className='user-nav bg-white'>
      <Link className={checkMatch(props.match.params.url, 'profile')} to='/user/profile'>
        <i className='glyphicon glyphicon-user' />個人檔案
      </Link>
      <Link className={checkMatch(props.match.params.url, 'courses')} to='/user/courses'>
        <i className='glyphicon glyphicon-time' />歷年課程
      </Link>
      <Link className={checkMatch(props.match.params.url, 'collections')} to='/user/collections'>
        <i className='glyphicon glyphicon-heart' />收藏課表
      </Link>
    </div>
  </div>
)

export { UserNavigation }
