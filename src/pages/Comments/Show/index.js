
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from 'pages/Layout'
import * as Comments from 'components/Comment'
import { getComment, deleteComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.scss'

class Show extends React.Component {
  constructor (props) {
    super(props)
    this.state = { replyOpen: false }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleReplyClick = this.handleReplyClick.bind(this)
    this.clickOnDimmer = this.clickOnDimmer.bind(this)
  }

  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }
  componentWillUnmount (){
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
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

  handleReplyClick () {
    this.setState({ replyOpen: !this.state.replyOpen })
  }

  clickOnDimmer(e){
    console.log('clickOnDimmer');
    this.props.history.push('/comments')
  }
  render () {
    const { comment, fetchingStatus } = this.props;
    // console.log(comment);
    let userName;
    let commentTime;
    let courseAndTeacher;
    let commentTitle;
    let commentContent;
    let replies;
    if(fetchingStatus === FETCHING_STATUS.DONE){
      userName = comment.anonymity ? '匿名' : comment.user.name;
      commentTime = comment.created_at.substr(0, 10);
      courseAndTeacher = `${comment.course.name}/
      ${comment.course.teachers[0]}${comment.course.teachers.slice(1).map((name)=>`,${name}`)}`
      commentTitle = comment.title;
      commentContent = comment.content
      replies = (
        <React.Fragment>
        {comment.reply.map((reply) => (
          <React.Fragment key={reply.id}>
            <Comments.Reply.Index data={{ ...reply }} />
            <hr />
          </React.Fragment>
        ))}
        </React.Fragment>
      )
    }

    return (
      <div className={styles.dimmer} onClick={this.clickOnDimmer}>
        <div className={styles.modal}>
          <div className={styles.post}>
            <div className={`clickable card ${styles.card}`}>
              <div className='card-body'>
                <div className={styles.header}>
                  <div className={`${styles.user}`}>
                    <i className="fas fa-user-circle mr-2"></i>{userName}
                  </div>
                  <div className={` text-muted ${styles.time}`}>
                    {commentTime}
                  </div>
                  <div className={`text-secondary ${styles.cardSubtitle}`}>
                    {courseAndTeacher}
                  </div>
                </div>
                <h5 className={styles.cardTitle}>{commentTitle}</h5>
                <div className={`text-muted ${styles.cardText}`}>{commentContent}</div>
              </div>
            </div>
          </div>
          <div className={styles.replyContainer}>
            {replies}
          </div>
          <div className={styles.postFooter}>

          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  fetchingStatus : state.comments.show.status,
  comment: state.comments.show.data,
  deleteStatus: state.comments.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  deleteCommentReset: () => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.IDLE))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
