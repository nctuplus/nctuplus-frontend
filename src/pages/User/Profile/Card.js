
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.scss'
const Card = ({ user }) => (
  <div className={styles.card}>
    <div className='text-center pt-3 mx-3 mt-2'>
      <img className='circle' width='128' height='128' src={user.avatar_url} />
      <h4 className='mt-4'>{ user.name }</h4>
    </div>
    <div>
      <div className={classNames('mx-auto', styles.cardbody)} >
      系級：{ user.major } { user.admission_year } 級 <br />
      學號：{ user.student_id }<br />
      信箱：{ user.email }<br />
      身份：{ user.identity } <br />
      分享課表：{ user.agree_to_share_course_table } <br />
      註冊日期：{ user.start_time }
      </div>
      <div className='card-footer text-center'>
        <button className='btn btn-primary btn-sm mx-1 ml-1 w-auto'>
          <Link className='flat-link text-white' to='/user/edit'>
            <i className='fa fa-pencil mx-1' />編輯檔案

          </Link>
        </button>
        <button className='btn btn-warning btn-sm mx-1'>
          <Link className='flat-link text-white' to='/scores/import'>
            <i className='fa fa-refresh mx-1' />匯入成績
          </Link>
        </button>
        <button className='btn btn-warning btn-sm mx-1'>
          <Link className='flat-link text-white' to='/scores/gpa'>
            <i className='fa fa-check mx-1' />GPA計算
          </Link>
        </button>
        <button className='btn btn-warning btn-sm mx-1'>
          <Link className='flat-link text-white' to='/course_maps/198'>
            <i className='fa fa-book mx-1' />課程地圖
          </Link>
        </button>
      </div>
    </div>
  </div>
)

export default Card
