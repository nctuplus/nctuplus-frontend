
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import * as Reply from 'components/Comment/Reply'
import style from './style.scss'

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
              { this.props.anonymity ? '匿名' : (this.props.user && this.props.user.name) }
              <br />
              { this.props.created_at && this.props.created_at.slice(0, 10) }
            </div>
          </div>
          <div className='col-lg-8 col-md-6 col-12'>
            <div className={style.btnBar}>
              <Link to={`/comments/${this.props.id}/edit`}>
                <button className='btn btn-info'>
                  <i className='fa fa-pencil' />編輯
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
            <Link to={`/courses/${this.props.course && this.props.course.id}`}>
              <div className='text-primary'>
                { this.props.course && this.props.course.name }
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
            <span className={style.content}>{ this.props.content }</span>
          </div>
        </div>

        <hr />

        {
          this.props.reply &&
          this.props.reply.map((reply) => (
            <div key={reply.id}>
              <Reply.Index data={{ ...reply }} />
              <hr />
            </div>
          ))
        }
        {
          this.state.replyOpen &&
          <Reply.New handleReplyClose={this.handleReplyClick} />
        }
      </div>
    )
  }
}

export default withRouter(Comment)
