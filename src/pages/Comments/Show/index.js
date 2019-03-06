
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from 'pages/Layout'
import * as Comments from 'components/Comment'
import { getComment, deleteComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'
import style from './style.scss'

class Show extends React.Component {
  constructor (props) {
    super(props)
    this.state = { replyOpen: false }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleReplyClick = this.handleReplyClick.bind(this)
  }

  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
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

  render () {
    const { comment } = this.props
    return (
      <Layout>
        <div className='container'>
          <div className='col-md-10 offset-md-1'>
            <div className='bg-white px-5 py-4'>
              <div className='row align-items-end'>
                <div className='col-lg-1 col-sm-2 col-4'>
                  <img alt='' src={this.props.userImage} height='50' width='50' />
                </div>
                <div className='col-lg-3 col-sm-4 col-8'>
                  <div>
                    { comment.anonymity ? '匿名' : (comment.user && comment.user.name) }
                    <br />
                    { comment.created_at && comment.created_at.substr(0, 10) }
                  </div>
                </div>
                <div className='col-lg-8 col-md-6 col-12'>
                  <div className={style.btnBar}>
                    {
                      this.props.currentUser && comment.user &&
                      this.props.currentUser.id === comment.user.id &&
                      <React.Fragment>
                        <Link to={`/comments/${comment.id}/edit`}>
                          <button className='btn btn-info'>
                            <i className='fa fa-pencil' />編輯
                          </button>
                        </Link>
                        <button className='btn btn-danger m-1' onClick={this.handleDeleteClick}>
                          <i className='fa fa-trash' />刪除
                        </button>
                      </React.Fragment>
                    }
                    <button className='btn btn-success' onClick={this.handleReplyClick}>
                      <i className='fa fa-reply' />回覆
                    </button>
                  </div>
                </div>
              </div>

              <hr />

              <div className='row mt-3'>
                <div className='col-md-12'>
                  <h4 className='m-0'>{ comment.title }</h4>
                  <Link to={`/courses/${comment.course && comment.course.id}`}>
                    <div className='text-primary'>
                      { comment.course && comment.course.name }
                      /
                      { comment.course &&
                        comment.course.teachers.length
                        ? <React.Fragment>
                          { comment.course.teachers[0] }
                          { comment.course.teachers.slice(1).map((name) => `,${name}`) }
                        </React.Fragment>
                        : 'N/A'
                      }
                    </div>
                  </Link>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-12'>
                  <span className={style.content}>{ comment.content }</span>
                </div>
              </div>

              <hr />

              {
                comment.reply &&
                comment.reply.map((reply) => (
                  <div key={reply.id}>
                    <Comments.Reply.Index data={{ ...reply }} />
                    <hr />
                  </div>
                ))
              }
              {
                this.state.replyOpen &&
                <Comments.Reply.New handleReplyClose={this.handleReplyClick} />
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  comment: state.comments.show.data,
  deleteStatus: state.comments.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  deleteCommentReset: () => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.IDLE))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
