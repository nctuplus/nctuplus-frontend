
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'pages/Layout'
import * as Comments from 'components/Comment'
import { getComment, deleteComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'

class Show extends React.Component {
  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
  }

  componentDidUpdate () {
    if (this.props.deleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteCommentReset()
      this.props.history.push('/comments')
    }
  }

  render () {
    return (
      <Layout>
        <div className='container'>
          <div className='col-md-10 offset-md-1'>
            <Comments.Card
              {...this.props.comment}
              deleteComment={(id) => this.props.deleteComment(id)}
              userLink='https://www.facebook.com'
              userImage='https://graph.facebook.com/463545620515814/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
            />
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  comment: state.comments.show.data,
  deleteStatus: state.comments.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id)),
  deleteComment: (id) => {
    if (window.confirm('確定刪除此心得嗎?')) {
      dispatch(deleteComment(id))
    }
  },
  deleteCommentReset: () => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.IDLE))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
