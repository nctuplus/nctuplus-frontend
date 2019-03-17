
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as Comments from 'components/Comment'
import { getComment, deleteComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.scss'

class Show extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { replyOpen: false }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.clickOnDimmer = this.clickOnDimmer.bind(this)
  }

  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
  }

  componentWillUnmount () {
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
  }

  componentDidUpdate () {
    if (this.props.deleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteCommentReset()
      this.props.history.push('/comments')
    }
  }

  handleDeleteClick () {
    if (window.confirm('確定刪除此心得嗎?')) {
      this.props.deleteComment(this.props.comment.id)
    }
  }

  handleEditClick () {
    this.props.history.push(`/comments/${this.props.comment.id}/edit`)
  }

  clickOnDimmer (e) {
    this.props.history.push('/comments')
  }

  render () {
    const { comment } = this.props
    let userName
    let commentTime
    let courseAndTeacher
    let commentTitle
    let commentContent
    let replies
    let courseID
    let commentUserId
    if (comment.course) {
      userName = comment.anonymity ? '匿名' : comment.user.name
      commentTime = comment.created_at.substr(0, 10)
      courseAndTeacher = `${comment.course.name}/${comment.course.teachers.join(', ')}`
      commentTitle = comment.title
      commentContent = comment.content
      replies = (
        <React.Fragment>
          {comment.reply.map((reply) => (
            <Comments.Reply.Index key={reply.id} data={{ ...reply }} />
          ))}
        </React.Fragment>
      )
      courseID = comment.course.id
      commentUserId = comment.user.id
    }

    return (
      <div className={styles.dimmer} onClick={this.clickOnDimmer}>
        <i className={`fas fa-times ${styles.exitBtn}`} />
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.post}>
            <div className={styles.card}>
              <div className={styles.header}>
                <img className={styles.userImg} alt='u_img' src='https://plus.nctu.edu.tw/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' height='40' width='40' />
                <div className={styles.info}>
                  <span className={styles.user}>{ userName }</span>
                  <span className={`text-muted ${styles.time}`}>{ commentTime }</span>
                </div>
                {
                  // 是當前使用者的心得才會有的按鈕
                  this.props.currentUser && this.props.currentUser.id === commentUserId &&
                  <div className={styles.btnBar}>
                    <button className='btn' onClick={this.handleDeleteClick}>
                      <i className='fa fa-trash' /><span>刪除</span>
                    </button>
                    <button className='btn' onClick={this.handleEditClick}>
                      <i className='fas fa-edit' /><span>編輯</span>
                    </button>
                  </div>
                }
                <div className={`text-secondary ${styles.cardSubtitle}`}>
                  <Link to={`/courses/${courseID}`}>{ courseAndTeacher }</Link>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{ commentTitle }</h3>
              <div className={styles.cardText}>{ commentContent }</div>
            </div>
          </div>
          <div className={styles.postFooter}>
            <Comments.Reply.New />
          </div>
          <div className={styles.replyContainer}>{ replies }</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  fetchingStatus: state.comments.show.status,
  comment: state.comments.show.data,
  deleteStatus: state.comments.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  deleteCommentReset: () => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.IDLE))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
