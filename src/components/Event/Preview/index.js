
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import moment from 'moment'
import style from './style.scss'

const Preview = (props) => (
  <div className='col-12 col-sm-6 col-md-3 mb-3'>
    <div className={classNames('card', style.cardBackground)}>
      <div className='text-right pr-2'>
        <span className={classNames('bold', 'date', moment().isBetween(props.begin_time, props.end_time) ? 'text-red' : 'text-grey')}>
          {
            (props.begin_time && props.end_time)
              ? (moment().isBetween(props.begin_time, props.end_time)
                ? '進行中'
                : props.begin_time.slice(0, 10))
              : '?????'
          }
        </span>
      </div>
      <Link to={`/events/${props.id}`}>
        <img
          alt='poster'
          className='card-img-top clickable'
          src={`${SERVER_URL}${props.cover_image.url}`}
        />
      </Link>

      <div className='card-text p-2'>
        <br />
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
