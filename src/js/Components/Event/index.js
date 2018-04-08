
import React from 'react'

const EVENT_STATUS = {
  IN_PROGRESS: 0,
  FINISHED: 1
}

const EventPreview = (props) => (
  <div className='col-12 col-sm-6 col-md-3 wrapper'>
    <div className='event-preview bg-white'>
      <div className='pull-right'>
        <span className={'bold date' + (props.status === EVENT_STATUS.IN_PROGRESS ? ' text-red' : '')}>
          { props.date }
        </span>
      </div>
      <div className='clickable' >
        <img alt='poster' className='img-responsive' src={props.poster} />
      </div>
      <div className='body'>
        <div className='title bold'>{ props.title }</div>
        <div className='info'>
          <div className='info-item'>單位: { props.organizer }</div>
          <div className='info-item'>地點: { props.location }</div>
        </div>
      </div>
    </div>
  </div>

)

const EventBlock = (props) => (
  <div className='row'>
    <div className='col-12 event-block'>
      <h1>{ props.title }</h1>
      { props.children }
    </div>

  </div>
)

export { EventBlock, EventPreview, EVENT_STATUS }
