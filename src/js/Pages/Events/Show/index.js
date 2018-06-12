
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import { connect } from 'react-redux'
import { getEvent, followEvent} from '../../../Redux/Actions/Events'
import './style.scss'
import {FETCHING_STATUS} from "../../../constants";

class Show extends React.Component {

  componentWillMount() {
    this.props.get_event(this.props.match.params.id)
  }

  render() {
    let event = this.props.event
    if(this.props.status === FETCHING_STATUS.ERROR)
      this.props.get_event(this.props.match.params.id)
    return (
      <PageWrapper>
        <div className='container'>
          <div className='banner-wrapper'>
            <img
              alt='Banner with text'
              width='100%'
              src={event.poster}
            />
          </div>
          <span className='event-title'>{event.title}</span>
          <div className='event-info-wrapper bg-white'>
            <div className='row'>
              <div className='col-7'>
                <p><i className='fa fa-calendar'/> 時間: <strong>{event.begin_time} ~ {event.end_time}</strong></p>
                <p><i className='fa fa-cubes'/> 主辦單位: {event.organization}</p>
                <p><i className='fa fa-location-arrow'/> 地點: {event.location}</p>
                <p><i className='fa fa-share-alt'/> 活動網址: <a href={event.url} target='blank'>點這裡</a></p>
              </div>
              <div className='col-5'>
                <p className='info-box'><i className='fa fa-eye'/> 觀看次數: <strong>{event.view_times}</strong></p>
                <p className='info-box'><i className='fa fa-rss'/> 關注人數: <strong>{event.event_follows_count}</strong>
                </p>
              </div>
            </div>


            <div className='divide-horizontal'>
              <span>活動介紹</span>
            </div>
            <section dangerouslySetInnerHTML={{__html: event.content}}/>
          </div>

        </div>
        <div className='fixed-menu fixed'>
          <div className='container'>
            <div className='pull-right'>
              {event.followBool ?
                <button className='btn btn-success nav-button' onClick={() => this.props.follow_Event(event.id, 3056)}>
                  取消關注
                </button>
                :
                <button className='btn btn-success nav-button' onClick={() => this.props.follow_Event(event.id, 3056)}>
                  關注
                </button>}
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  event: state.events.show.data,
  status: state.events.show.status
})

const mapDispatchToProps = (dispatch) => ({
  get_event: (id) => dispatch(getEvent(id)),
  follow_Event: (event_id, user_id) => dispatch(followEvent(event_id, user_id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Show)
