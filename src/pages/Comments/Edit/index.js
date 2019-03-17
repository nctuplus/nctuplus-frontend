
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as Comments from 'components/Comment'
import { SearchListSingle } from 'components/Course/SearchList'
import { modal } from 'components/Modal'
import { toast } from 'components/Toast'
import { getComment, patchComment } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  comment: state.comments.show.data,
  fetchStatus: state.comments.show.status,
  updateStatus: state.comments.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getComment(id)),
  patchComment: (payload, id) => dispatch(patchComment(payload, id)),
  patchCommentReset: () => dispatch(actions.comments.edit.setStatus(FETCHING_STATUS.IDLE))
})

class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        title: '',
        content: '★修課年度★\n\n￡教了什麼￡\n\n◆上課方式◆\n\n▼考試作業▼\n\n￥其他￥\n\n＆誰適合修這門課＆\n',
        rating: '000',
        course: '',
        anonymity: false
      },
      searchFilter: {
        year: '',
        term: '',
        keyword: ''
      },
      synced: false
    }
    this.formRef = React.createRef()
    this.replaceRating = this.replaceRating.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getComment(this.props.match.params.id)
  }

  componentDidUpdate () {
    // 把該心得的資訊複製到payload
    if (this.props.fetchStatus === FETCHING_STATUS.DONE && !this.state.synced) {
      this.setState({
        payload: {
          ...this.state.payload,
          ...this.props.comment
        }
      })
      this.setState({ synced: true })
    }

    // 編輯完成
    if (this.props.updateStatus === FETCHING_STATUS.DONE) {
      this.props.patchCommentReset()
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

    this.setState({
      payload: {
        ...this.state.payload,
        course: {
          id: course.id,
          name: course.permanent_course.name,
          teacher: course.teachers
        }
      }
    })
    toast(content, { type: 'success' })
  }

  onSearch (event) {
    if (this.state.searchFilter.keyword) {
      event.preventDefault()
      modal(
        <SearchListSingle
          filter={this.state.searchFilter}
          chooseSearchCourse={(course) => this.chooseSearchCourse(course)}
        />
      )
    }
  }

  onSubmit (event) {
    let payload = this.state.payload

    if (!payload.course.id) {
      toast('請先選擇適用課程', { type: 'warning' })
      return
    }

    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    if (payload.title && payload.content && payload.rating && payload.course.id) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.patchComment(payload, this.props.match.params.id)
    }
  }

  render () {
    return (
      <Comments.Form
        {...this.state}
        formType='edit'
        formRef={this.formRef}
        replaceRating={this.replaceRating}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        updateSearchFilter={(filter) => this.setState({ searchFilter: { ...this.state.searchFilter, ...filter } })}
        onSubmit={this.onSubmit}
        onSearch={this.onSearch}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
