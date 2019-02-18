
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import style from './style.scss'

const CommentReply = (props) => (
  <div className='row justify-content-end mt-5'>
    <div className='col-md-12'>
      <textarea className='form-control' placeholder='內容...' rows='5' />
    </div>
    <div className='m-3 text-center'>
      <div className='d-inline-block m-1' >
        <label>
          <input type='checkbox' />匿名
        </label>
      </div>
      <button className='btn btn-primary m-1'>送出</button>
    </div>
  </div>
)

const SubComment = (props) => (
  <div className='mt-4'>
    <div className='row align-items-end'>
      <div className='col-lg-1 col-sm-2 col-4'>
        <img alt='' src={props.userImage} height='50' width='50' />
      </div>
      <div className='col-lg-3 col-sm-4 col-8'>
        <div>
          { props.user && (props.anonymity ? '匿名' : props.user.name) }
          <br />
          { props.created_at.slice(0, 10) }
        </div>
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-md-12'>
        <p className='fa-lg'>{ props.content }</p>
      </div>
    </div>
  </div>
)

class Comment extends React.Component {
  constructor (props) {
    super(props)
    this.state = { replyOpen: false }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleReplyClick = this.handleReplyClick.bind(this)
  }

  handleDeleteClick () {
    this.props.deleteComment(this.props.id)
  }

  handleReplyClick () {
    this.setState({ replyOpen: !this.state.replyOpen })
  }

  render () {
    return (
      <div className='bg-white px-5 py-4'>
        <div className='row align-items-end'>
          <div className='col-lg-1 col-sm-2 col-4'>
            <img alt='' src={this.props.userImage} height='50' width='50' />
          </div>
          <div className='col-lg-3 col-sm-4 col-8'>
            <div>
              { this.props.user && (this.props.anonymity ? '匿名' : this.props.user.name) }
              <br />
              { this.props.created_at }
            </div>
          </div>
          <div className='col-lg-8 col-md-6 col-12'>
            <div className={`${style.btnBar}`}>
              <Link to={`/comments/${this.props.id}/edit`}>
                <button className='btn btn-info'>
                  <i className='fa fa-pencil' />修改
                </button>
              </Link>
              <button className='btn btn-danger m-1' onClick={this.handleDeleteClick}>
                <i className='fa fa-trash' />刪除
              </button>
              <button className='btn btn-success' onClick={this.handleReplyClick}>
                <i className='fa fa-reply' />回覆
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className='row mt-3'>
          <div className='col-md-12'>
            <h4 className='m-0'>{ this.props.title }</h4>
            <Link to={`/courses/${this.props.course && this.props.course.course_id}`}>
              <div className='text-primary'>
                { this.props.course && this.props.course.course_name }
                /
                { this.props.course &&
                  this.props.course.teachers.length
                  ? <React.Fragment>
                    { this.props.course.teachers[0] }
                    { this.props.course.teachers.slice(1).map((name) => `,${name}`) }
                  </React.Fragment>
                  : 'N/A'
                }
              </div>
            </Link>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-12'>
            <span className={`fa-lg ${style.content}`}>{ this.props.content }</span>
          </div>
        </div>

        <hr />

        {
          this.props.sub_comments &&
          this.props.sub_comments.map((comment) => (
            <div key={comment.id}>
              <SubComment {...comment} />
              <hr />
            </div>
          ))
        }
        {
          this.state.replyOpen &&
          <CommentReply />
        }
      </div>
    )
  }
}

export default withRouter(Comment)
