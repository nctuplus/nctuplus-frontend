
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'pages/Layout'
import * as Comments from 'components/Comment'
import { getComment } from 'api/Controllers/comments'

class Show extends React.Component {
  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
  }

  render () {
    return (
      <Layout>
        <div className='container'>
          <div className='col-md-10 offset-md-1'>
            <Comments.Card
              {...this.props.comment}
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
  status: state.comments.show.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
