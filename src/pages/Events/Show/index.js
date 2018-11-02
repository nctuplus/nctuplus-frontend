
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'
import { getEvent, deleteEvent, updateFollowEvents, deleteFollowEvents } from 'api/Controllers/events'
import actions from 'api/Actions/Events'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.scss'

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
    const { event, followEvents } = this.props
    const followIndex = followEvents.findIndex(e => e.id === event.id)
    let type
    switch (event.event_type) {
      case 1:
        type = '校友週'
        break
      case 2:
        type = '表演'
        break
      case 3:
        type = '講座'
        break
      case 4:
        type = '擺攤'
        break
      case 5:
        type = '比賽'
        break
      case 6:
        type = '其他'
        break
      default:
        type = ''
        break
    }

    return (
      <Layout>
        <div className='container'>
          <div className={styles.bannerWrapper}>
            <img
              alt='No image'
              width='100%'
              src={event.cover_image && `${SERVER_URL}${event.cover_image.url}`}
            />
          </div>
          <span className={styles.eventTitle}>[{type}] {event.title}</span>
          <div className={`${styles.eventInfoWrapper} bg-white`}>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <p><i className='fa fa-calendar' /> 時間: <strong>{event.begin_time} ~ {event.end_time}</strong></p>
                <p><i className='fa fa-cubes' /> 主辦單位: {event.organization}</p>
                <p><i className='fa fa-location-arrow' /> 地點: {event.location}</p>
                <p><i className='fa fa-share-alt' /> 活動網址: <a href={event.url} target='blank'>點這裡</a></p>
              </div>
              <div className='col-12 col-lg-4'>
                <p className={styles.infoBox}><i className='fa fa-eye' /> 觀看次數: <strong>{event.view_count}</strong></p>
                <p className={styles.infoBox}><i className='fa fa-rss' /> 關注人數: <strong>{event.follow_count}</strong>
                </p>
              </div>
            </div>

            <div className={styles.divideHorizontal}>
              <span>活動介紹</span>
            </div>
            <section dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
          <div className='row mx-0 py-3'>
            <div className={`${styles.fixedMenu}`}>
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
                {
                  followIndex >= 0
                    ? <button className='btn btn-success nav-button' onClick={() => this.props.cancelFollow(event.id, followIndex, followEvents)}>
                    取消關注
                    </button>
                    : <button className='btn btn-success nav-button' onClick={() => this.props.follow(event.id, followEvents)}>
                    關注
                    </button>
                }
              </div>
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
  eventDeleteStatus: state.events.delete.status,
  followEvents: state.events.follow.data
})

const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(getEvent(id)),
  deleteEvent: (id) => {
    if (window.confirm('確定刪除此活動嗎?')) {
      dispatch(deleteEvent(id))
    }
  },
  deleteEventReset: () => dispatch(actions.events.delete.setStatus(FETCHING_STATUS.IDLE)),
  follow: (id, events) => dispatch(updateFollowEvents(id, events)),
  cancelFollow: (id, pos, events) => dispatch(deleteFollowEvents(id, pos, events))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
