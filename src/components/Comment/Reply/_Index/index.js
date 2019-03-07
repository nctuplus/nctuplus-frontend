
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deleteCommentReply, getComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'
import style from './style.scss'

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
      <div className='mt-4'>
        <div className='row align-items-end'>
          <div className='col-lg-1 col-sm-2 col-4'>
            <img alt='' src={this.props.userImage} height='50' width='50' />
          </div>
          <div className='col-lg-3 col-sm-4 col-8'>
            <div>
              { data.anonymity ? '匿名' : (data.user && data.user.name) }
              <br />
              { data.created_at && data.created_at.substr(0, 10) }
            </div>
          </div>
          {
            // 是當前使用者的回覆 才會有刪除按鈕
            this.props.currentUser && data.user &&
            this.props.currentUser.id === data.user.id &&
            <div className='col-lg-8 col-md-6 col-12'>
              <div className={style.btnBar}>
                <button className='btn btn-danger m-1' onClick={this.handleDeleteClick}>
                  <i className='fa fa-trash mr-1' />刪除
                </button>
              </div>
            </div>
          }
        </div>
        <div className='row mt-3'>
          <div className='col-md-12'>
            <span className={style.content}>{ data.content }</span>
          </div>
        </div>
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
