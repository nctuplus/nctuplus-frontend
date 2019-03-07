
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'
import style from './style.scss'

const Preview = (props) => (
  <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
    <div className={classNames('card', 'p-2', style.cardBackground)}>
      <div className='text-right'>
        <span className={classNames('bold', 'date', moment().isBetween(props.begin_time, props.end_time) ? 'text-red' : 'text-grey')}>
          {
            props.begin_time && props.end_time &&
            moment().isBetween(props.begin_time, props.end_time)
              ? '進行中'
              : props.begin_time.substr(0, 10)
          }
        </span>
      </div>
      <Link to={`/events/${props.id}`}>
        <img
          alt='poster'
          className='card-img-top clickable'
          src={`${SERVER_URL}${props.cover_image.url}`}
          style={{ width: '100%', height: '130px', objectFit: 'cover' }}
        />
      </Link>

      <div className='card-body p-1'>
        <div className={classNames('card-title', 'bold', 'pt-1', style.eventTitle)}>{ props.title }</div>
        <div className='info'>
          <div className={classNames('info-item', 'ellipsis', style.eventInfo)}>單位: { props.organization }</div>
          <div className={classNames('info-item', 'ellipsis', style.eventInfo)}>地點: { props.location }</div>
        </div>
      </div>
    </div>
  </div>
)

export default Preview
