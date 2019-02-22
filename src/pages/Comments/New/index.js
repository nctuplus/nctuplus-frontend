
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as Comments from 'components/Comment'
import { SearchListSingle } from 'components/Course/SearchList'
import { modal } from 'components/Modal'
import { toast } from 'components/Toast'
import { postComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  comment: state.comments.new.data,
  status: state.comments.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postComment: (payload) => dispatch(postComment(payload)),
  postCommentReset: () => dispatch(actions.comments.new.setStatus(FETCHING_STATUS.IDLE))
})

class New extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        title: '',
        content: '★修課年度★\n\n￡教了什麼￡\n\n◆上課方式◆\n\n▼考試作業▼\n\n￥其他￥\n\n＆誰適合修這門課＆\n',
        rating: '000',
        course_id: '',
        anonymity: false
      },
      courseSearchWord: ''
    }
    this.formRef = React.createRef()
    this.replaceRating = this.replaceRating.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate () {
    if (this.props.status === FETCHING_STATUS.DONE) {
      this.props.postCommentReset()
      this.props.history.push(`/comments/${this.props.comment.id}`)
    }
  }

  replaceRating (str, index, number) {
    switch (index) {
      case 0:
        return `${number}${str.charAt(1)}${str.charAt(2)}`
      case 1:
        return `${str.charAt(0)}${number}${str.charAt(2)}`
      case 2:
        return `${str.charAt(0)}${str.charAt(1)}${number}`
      default:
        return '000'
    }
  }

  chooseSearchCourse (course) {
    let content = `已選擇${course.permanent_course.name}/${course.teachers[0].name}`
    content += course.teachers.slice(1).map((teacher) => `,${teacher.name}`)

    this.setState({ payload: { ...this.state.payload, course_id: course.id } })
    toast(content, { type: 'success' })
  }

  onSearch (event) {
    if (this.state.courseSearchWord) {
      event.preventDefault()
      modal(
        <SearchListSingle
          searchWord={this.state.courseSearchWord}
          chooseSearchCourse={(course) => this.chooseSearchCourse(course)}
        />
      )
    }
  }

  onSubmit (event) {
    let payload = this.state.payload

    if (!payload.course_id) {
      toast('請先選擇適用課程', { type: 'warning' })
      return
    }

    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    if (payload.title && payload.content && payload.rating && payload.course_id) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.postComment(payload)
    }
  }

  render () {
    return (
      <Comments.Form
        {...this.state}
        formType='new'
        formRef={this.formRef}
        replaceRating={this.replaceRating}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        updateSearchWord={(word) => this.setState({ courseSearchWord: word })}
        onSubmit={this.onSubmit}
        onSearch={this.onSearch}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
