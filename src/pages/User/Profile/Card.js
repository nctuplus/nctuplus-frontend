
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.scss'
const Card = ({ user }) => (
  <div className={classNames('container', styles.card)}>
    <div className='row'>
      <div className={classNames('col-7', styles.cardRight)}>
        <div className={classNames('mx-auto pl-3 pt-3', styles.cardbody)} >
          系級：{ user.major } { user.admission_year } 級 <br />
          信箱：{ user.email }<br />
          綁定：{'OAuth'}<br />
          {/* 學號：{ user.student_id }<br />
          身份：{ user.identity } <br />
          分享課表：{ user.agree_to_share_course_table } <br />
          註冊日期：{ user.start_time } */}
        </div>
        <hr />
        <div className={classNames(styles.cardFooter, 'm-auto p-auto pb-4')}>
          {/* <button className={classNames(styles.btnCustomPrimary, 'mx-1 ml-1 w-auto')}>
            <Link className='flat-link text-white' to='/user/edit'>
              <i className='fa fa-pencil mx-1' />編輯檔案

            </Link>
          </button>
          <button className={classNames(styles.btnCustomWarning, 'mx-1')}>
            <Link className='flat-link text-white' to='/scores/import'>
              <i className='fa fa-refresh mx-1' />匯入成績
            </Link>
          </button>
          <button className={classNames(styles.btnCustomWarning, 'mx-1')}>
            <Link className='flat-link text-white' to='/scores/gpa'>
              <i className='fa fa-check mx-1' />GPA計算
            </Link>
          </button>
          <button className={classNames(styles.btnCustomWarning, 'mx-1')}>
            <Link className='flat-link text-white' to='/course_maps/198'>
              <i className='fa fa-book mx-1' />課程地圖
            </Link>
          </button> */}
          <div className='row mx-auto'>
            <div className='col text-center'>
              歷年平均分數
              <h5 className='bold'>{ user.avg_score }</h5>
            </div>
            <div className='col text-center'>
              距離畢業
              <h5 className='bold'>{ user.graduate_day } 天</h5>
            </div>
            <div className='w-100' />
            <div className='col text-center'>
              本學期學分
              <h5 className='bold'>{ user.now_credit }</h5>
            </div>
            <div className='col text-center'>
              已修/畢業學分
              <h5 className='bold'>{ user.past_credit + '/' + user.need_credit }</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames('col-5 text-center', styles.cardLeft)}>
        <img className='circle' width='128' height='128' src={user.avatar_url} />
        <h4 className='mt-4'>{ user.name }</h4>
        <h6 className='mt-2'>{ user.student_id }</h6>
        <button className={classNames(styles.btnCustomPrimary, 'mx-1')}>
          <Link className='flat-link text-white' to='/user/edit'>
            <i className='fa fa-pencil mx-1' />編輯檔案
          </Link>
        </button>
        <button className={classNames(styles.btnCustomWarning, 'mx-1')}>
          <Link className='flat-link text-white' to='/scores/import'>
            <i className='fa fa-refresh mx-1' />匯入成績
          </Link>
        </button>
      </div>
    </div>

  </div>
)

export default Card
