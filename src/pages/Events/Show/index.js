
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'
import { getEvent, followEvent, deleteEvent } from 'api/controller'
import eventActions from 'api/Actions/Events'
import { FETCHING_STATUS } from 'utilities/constants'
import './style.scss'

class Show extends React.Component {
  componentDidMount () {
    this.props.getEvent(this.props.match.params.id)
  }

  componentDidUpdate () {
    if (this.props.eventDeleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteEventReset()
      this.props.history.push('/events')
    }
  }

  render () {
    const { event } = this.props

    return (
      <Layout>
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
                <p><i className='fa fa-calendar' /> 時間: <strong>{event.begin_time} ~ {event.end_time}</strong></p>
                <p><i className='fa fa-cubes' /> 主辦單位: {event.organization}</p>
                <p><i className='fa fa-location-arrow' /> 地點: {event.location}</p>
                <p><i className='fa fa-share-alt' /> 活動網址: <a href={event.url} target='blank'>點這裡</a></p>
              </div>
              <div className='col-5'>
                <p className='info-box'><i className='fa fa-eye' /> 觀看次數: <strong>{event.view_count}</strong></p>
                <p className='info-box'><i className='fa fa-rss' /> 關注人數: <strong>{event.follow_count}</strong>
                </p>
              </div>
            </div>

            <div className='divide-horizontal'>
              <span>活動介紹</span>
            </div>
            <section dangerouslySetInnerHTML={{__html: event.content}} />
          </div>
        </div>
        <div className='fixed-menu fixed'>
          <div className='container'>
            { // 這裡先直接顯示 之後要改成判斷是否為自己的活動
              <div className='pull-left'>
                <Link to={`/events/${this.props.match.params.id}/edit`} className='flat-link'>
                  <button className='btn btn-primary nav-button' >
                    編輯
                  </button>
                </Link>
                <button className='btn btn-danger nav-button' onClick={() => this.props.deleteEvent(this.props.match.params.id)}>
                  刪除
                </button>
              </div>
            }
            <div className='pull-right'>
              {event.followBool
                ? <button className='btn btn-success nav-button' onClick={() => this.props.followEvent(event.id, 3056)}>
                  取消關注
                </button>
                : <button className='btn btn-success nav-button' onClick={() => this.props.followEvent(event.id, 3056)}>
                  關注
                </button>}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  event: state.events.show.data,
  status: state.events.show.status,
  eventDeleteStatus: state.events.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(getEvent(id)),
  followEvent: (id) => dispatch(followEvent(id)),
  deleteEvent: (id) => {
    if (window.confirm('確定刪除此活動嗎?')) {
      dispatch(deleteEvent(id))
    }
  },
  deleteEventReset: () => dispatch(eventActions.events.delete.setStatus(FETCHING_STATUS.IDLE))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
