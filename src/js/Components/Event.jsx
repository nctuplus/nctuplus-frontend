
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const EVENT_STATUS = {
  IN_PROGRESS: 0,
  FINISHED: 1
}

const EventPreview = (props) => (
  <Col md={3} sm={6} xs={12} className='wrapper'>
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
  </Col>

)

const EventBlock = (props) => (
  <Row>
    <Col xs={12} className='event-block'>
      <h1>{ props.title }</h1>
      { props.children }
    </Col>

  </Row>
)

export { EventBlock, EventPreview, EVENT_STATUS }
