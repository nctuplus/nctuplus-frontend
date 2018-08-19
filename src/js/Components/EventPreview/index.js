
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EventPreview = (props) => (
  <div className='col-12 col-sm-6 col-md-3 mb-3'>
    <div className='card bg-white'>

      <Link to={`/events/${props.id}`}>
        <img
          alt='poster'
          className='card-img-top clickable'
          src={`${SERVER_URL}${props.cover_image.url}`}
        />
      </Link>

      <div className='card-text p-2'>
        <div className='pull-right'>
          <span className={classNames('bold', 'date', moment().isBetween(props.begin_time, props.end_time) && 'text-red')}>
            {
              moment().isBetween(props.begin_time, props.end_time)
                ? '進行中'
                : props.begin_time.slice(0, 10)
            }
          </span>
        </div>
        <br />
        <div className='card-title bold'>{ props.title }</div>

        <div className='info'>
          <div className='info-item'>單位: { props.organization }</div>
          <div className='info-item'>地點: { props.location }</div>
        </div>
      </div>
    </div>
  </div>
)

export default EventPreview
