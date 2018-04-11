
import React from 'react'
import { connect } from 'react-redux'
import { getEvent } from '../../../Redux/Actions/Events'
import './style.scss'

const Show = (props) => {
  let event = props.event
  props.status || props.get_event(props.match.params.id)
  return (
    <div className='page-wrapper event-detail'>
      <div className='container'>
        <div className='banner-wrapper'>
          <img
            alt='Banner with text'
            width='100%'
            src={event.poster}
          />
        </div>
        <span className='event-title'>{ event.title }</span>
        <div className='event-info-wrapper bg-white'>
          <div className='row'>
            <div className='col-7'>
              <p><i className='fa fa-calendar' /> 時間: <strong>{ event.start_time } ~ { event.end_time }</strong></p>
              <p><i className='fa fa-cubes' /> 主辦單位: { event.organizer }</p>
              <p><i className='fa fa-location-arrow' /> 地點: { event.positon }</p>
              <p><i className='fa fa-share-alt' /> 活動網址: <a href={event.link} target='blank'>點這裡</a></p>
            </div>
            <div className='col-5'>
              <p className='info-box'><i className='fa fa-eye' /> 觀看次數: <strong>{ event.view_count }</strong></p>
              <p className='info-box'><i className='fa fa-sign-in' /> 參加人數: <strong>{ event.participant }</strong></p>
              <p className='info-box'><i className='fa fa-rss' /> 關注人數: <strong>{ event.people }</strong></p>
            </div>
          </div>
          <div className='divide-horizontal'>
            <span>活動介紹</span>
          </div>
          <section dangerouslySetInnerHTML={event.introduce} />
        </div>

      </div>
      <div className='fixed-menu fixed'>
        <div className='container'>
          <div className='pull-right'>
            <button className='btn btn-info nav-button'>
              關注
            </button>
            <button className='btn btn-success nav-button' >
              參加
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  event: state.events.show.data,
  status: state.events.show.status
})

const mapDispatchToProps = (dispatch) => ({
  get_event: (id) => dispatch(getEvent(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Show)
