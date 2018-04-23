
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import PageWrapper from '../../../Components/PageWrapper'
import { getEvent, followEvent, deleteEvent, deleteEventReset } from '../../../Redux/Actions/Events'
import { FETCHING_STATUS } from '../../../constants'
import './style.scss'

class Show extends React.Component {
  componentDidMount() {
    this.props.get_event(this.props.match.params.id)
  }

  render() {
    let event = this.props.event

    if(this.props.status_delete === FETCHING_STATUS.DONE) {
      this.props.delete_event_reset()
      return (<Redirect to='/events' />)
    }
    
    if(this.props.status === FETCHING_STATUS.ERROR) {
      this.props.get_event(this.props.match.params.id)
    }

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
                <p><i className='fa fa-calendar'/> 時間: <strong>{event.begin_time.slice(0, 10)} ~ {event.end_time.slice(0, 10)}</strong></p>
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
            {(1===1) ?
              <div className='pull-left'>
                <Link to={`/events/${this.props.match.params.id}/edit`} className='flat-link'>
                  <button className='btn btn-primary nav-button' >
                    編輯
                  </button>
                </Link>
                <button className='btn btn-danger nav-button' onClick={() => this.props.delete_event(this.props.match.params.id)}>
                  刪除
                </button>
              </div> :
              <div></div>
            }
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
  status: state.events.show.status,
  status_delete: state.events.show.status_delete
})

const mapDispatchToProps = (dispatch) => ({
  get_event: (id) => dispatch(getEvent(id)),
  follow_event: (event_id, user_id) => dispatch(followEvent(event_id, user_id)),
  delete_event: (id) => {
    if (window.confirm('確定刪除此活動嗎?')){
      dispatch(deleteEvent(id))
    }
  },
  delete_event_reset: () => dispatch(deleteEventReset())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))