
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './style.scss'

const EventPreview = (props) => {
  let now = Date.now()
  let inProgress = Date.parse(props.start_time) <= now && now <= Date.parse(props.end_time)
  return (
    <div className='col-12 col-sm-6 col-md-3 mb-3'>
      <div className='card bg-white'>

        <Link to={`/events/${props.id}`}>
          <img
            alt='poster'
            className='card-img-top clickable'
            src={props.poster}
          />
        </Link>

        <div className='card-text p-2'>
          <div className='pull-right'>
            <span className={classNames('bold', 'date', inProgress && 'text-red')}>
              {
                inProgress
                  ? '進行中'
                  : props.begin_time.slice(5, 10)
              }
            </span>
          </div>
          <br />
          <div className='card-title bold'>{ props.title }</div>

          <div className='info'>
            <div className='info-item'>單位: { props.organizer }</div>
            <div className='info-item'>地點: { props.location }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EventPreview }
