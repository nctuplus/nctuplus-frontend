
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.scss'

const Card = ({ user }) => (
  <div className={classNames('ml-3', styles.card)}>
    <div className='row'>
      <div className={classNames('p-2 ml-4', styles.cardLeft)}>
        <div className={classNames('mx-auto pl-2 pt-2', styles.cardbody)} >
          系級&emsp;&emsp;&emsp;&emsp;{ user.major } { user.admission_year } 級 <br />
          信箱&emsp;&emsp;&emsp;&emsp;{ user.email }<br />
          綁定&emsp;&emsp;&emsp;&emsp;{'OAuth'}<br />
          {/* 學號：{ user.student_id }<br />
          身份：{ user.identity } <br />
          分享課表：{ user.agree_to_share_course_table } <br />
          註冊日期：{ user.start_time } */}
        </div>

        <div className={classNames(styles.cardFooter, 'm-auto pt-3 pb-2')}>
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
            <div className={classNames('col text-center', styles.rightLine, styles.bottomLine)}>
              歷年平均
              <h5 className='bold'>{ user.avg_score }</h5>
            </div>
            <div className={classNames('col text-center', styles.bottomLine)}>
              本學期學分
              <h5 className='bold'>{ user.now_credit }</h5>
            </div>
          </div>
          <div className='row mx-auto'>
            <div className={classNames('col text-center', styles.rightLine)}>
              畢業倒數
              <h5 className='bold'>{ user.graduate_day } 天</h5>
            </div>
            <div className='col text-center'>
              已修/畢業學分
              <h5 className='bold'>{ user.past_credit + '/' + user.need_credit }</h5>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('col-5 p-0 text-center', styles.cardRight)}>
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
