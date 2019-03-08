
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deleteCommentReply, getComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.scss'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidUpdate () {
    if (this.props.deleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteReplyReset()
      this.props.getComment(this.props.match.params.id)
    }
  }

  handleDeleteClick () {
    if (window.confirm('確定刪除此回覆嗎?')) {
      this.props.deleteReply(this.props.match.params.id, this.props.data.id)
    }
  }

  render () {
    const { data } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {/* <img alt='u_img' src={this.props.userImage} height='40' width='40' /> */}
          <img alt='u_img' src='https://plus.nctu.edu.tw/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' height='40' width='40' />
          <div className={styles.userInfo}>
            <div className={styles.userName}>{ data.anonymity ? '匿名' : (data.user && data.user.name) }</div>
            <div className={`text-muted ${styles.time}`}>{ data.created_at && data.created_at.substr(0, 10) }</div>
          </div>
          {
            // 是當前使用者的回覆 才會有刪除按鈕
            this.props.currentUser && this.props.currentUser.id === data.user.id &&
            <div className={styles.btnBar}>
              <button className='btn btn-danger' onClick={this.handleDeleteClick}>
                <i className='fa fa-trash mr-2' />刪除
              </button>
            </div>
          }
        </div>
        <div className={styles.content}>{ data.content }</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  deleteStatus: state.comments.reply.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  deleteReply: (commentId, replyId) => dispatch(deleteCommentReply(commentId, replyId)),
  deleteReplyReset: () => dispatch(actions.comments.reply.delete.setStatus(FETCHING_STATUS.IDLE)),
  getComment: (id) => dispatch(getComment(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
