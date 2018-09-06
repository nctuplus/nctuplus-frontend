
import React from 'react'
import PageWrapper from 'components/PageWrapper'
import { Comment } from 'components/Comment'

import { connect } from 'react-redux'
import { getComment } from 'redux/Actions/Comments'

const Show = (props) => {
  let comment = props.comment
  props.status || props.get_comment(props.match.params.id)
  return (
    <PageWrapper>
      <div className='container'>
        <div className='col-10 offset-1 bg-white'>
          <Comment
            enable_reply
            {...comment}
            user_link='https://www.facebook.com'
            user_image='https://graph.facebook.com/463545620515814/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
          />
        </div>
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  comment: state.comments.show.data,
  status: state.comments.show.status
})

const mapDispatchToProps = (dispatch) => ({
  get_comment: (id) => dispatch(getComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
