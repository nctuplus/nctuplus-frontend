
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as Comments from 'components/Comment'
import { postCommentReply, getComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  postStatus: state.comments.reply.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postReply: (payload, id) => dispatch(postCommentReply(payload, id)),
  postReplyReset: () => dispatch(actions.comments.reply.new.setStatus(FETCHING_STATUS.IDLE)),
  getComment: (id) => dispatch(getComment(id))
})

class New extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        content: '',
        anonymity: false
      }
    }
    this.formRef = React.createRef()
    this.updatePayload = this.updatePayload.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  componentDidUpdate () {
    if (this.props.postStatus === FETCHING_STATUS.DONE) {
      // POST回覆完成後 重新GET該心得 回覆才會更新
      this.props.postReplyReset()
      this.props.getComment(this.props.match.params.id)
      this.props.handleReplyClose()
    }
  }

  updatePayload (payload) {
    this.setState({
      payload: {
        ...this.state.payload,
        ...payload
      }
    })
  }

  onSubmit (event) {
    let payload = this.state.payload

    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    if (payload.content) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.postReply(payload, this.props.match.params.id)
    }
  }

  onCancel (event) {
    event.preventDefault()
    this.props.handleReplyClose()
  }

  render () {
    return (
      <Comments.Reply.Form
        {...this.state}
        formType='new'
        formRef={this.formRef}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
