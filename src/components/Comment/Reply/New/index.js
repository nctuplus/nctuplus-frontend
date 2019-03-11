
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
  }

  componentDidUpdate () {
    if (this.props.postStatus === FETCHING_STATUS.DONE) {
      // POST回覆完成後 重新GET該心得 回覆才會更新
      this.props.postReplyReset()
      this.props.getComment(this.props.match.params.id)
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
    // 讓表單不要照預設方法送出
    event.preventDefault()
    let payload = this.state.payload

    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    if (payload.content && this.props.postStatus !== FETCHING_STATUS.FETCHING) {
      this.updatePayload({ content: '' })
      this.props.postReply(payload, this.props.match.params.id)
    }
  }

  render () {
    return (
      <Comments.Reply.Form
        {...this.state}
        formRef={this.formRef}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        onSubmit={this.onSubmit}
        fetchingStatus={this.props.postStatus}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
