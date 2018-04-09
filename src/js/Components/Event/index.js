
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const EVENT_STATUS = {
  IN_PROGRESS: 0,
  FINISHED: 1
}

const EventPreview = (props) => (
  <div className='col-12 col-sm-6 col-md-3 mb-3'>
    <div className='card bg-white'>

      <img alt='poster' className='card-img-top clickable' src={props.poster} />

      <div className='card-text p-2'>
        <div className='pull-right'>
          <span className={classNames('bold', 'date', props.status === EVENT_STATUS.IN_PROGRESS && ' text-red')}>
            { props.date }
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

const EventBlock = (props) => (
  <div className='event-block p-4 mb-3'>
    <div className='row'>
      <div className='col-12'>
        <h1>{ props.title }</h1>
      </div>
      { props.children }
    </div>
  </div>
)

export { EventBlock, EventPreview, EVENT_STATUS }
