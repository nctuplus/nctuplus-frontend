
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as PastExams from 'components/PastExam'
import { SearchListSingle } from 'components/Course/SearchList'
import { modal } from 'components/Modal'
import { toast } from 'components/Toast'
import { postPastExam } from 'api/Controllers/pastExams'
import actions from 'api/Actions/PastExams'
import { base64encode } from 'utilities'
import { FETCHING_STATUS } from 'utilities/constants'

class New extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        description: '',
        file: null,
        course: '',
        anonymity: false
      },
      searchFilter: {
        year: '',
        term: '',
        keyword: ''
      },
      fileInfo: '',
      fileUploadStatus: 'none'
    }
    this.formRef = React.createRef()
    this.fileUploadRef = React.createRef()
    this.chooseSearchCourse = this.chooseSearchCourse.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate () {
    if (this.props.status === FETCHING_STATUS.DONE) {
      this.props.postPastExamReset()
      this.props.history.push('/past_exams')
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

  onFileUpload () {
    const file = this.fileUploadRef.current.files[0]
    this.setState({
      fileUploadStatus: 'uploading',
      fileInfo: {
        name: file.name,
        size: file.size
      }
    })
    base64encode(file)
      .then(encoded => {
        this.setState({ payload: { ...this.state.payload, file: encoded } })
        this.setState({ fileUploadStatus: 'done' })
      })
  }

  onSubmit (event) {
    let payload = this.state.payload

    if (!payload.course.id) {
      toast('請先選擇適用課程', { type: 'warning' })
      return
    }

    if (!payload.file) {
      toast('請先選擇檔案', { type: 'warning' })
      return
    }

    // 檔案還沒上傳並編碼完前不送出
    if (this.state.fileUploadStatus === 'uploading') {
      toast('檔案處理中，請稍候再送出', { type: 'warning' })
      return
    }

    if (payload.file && payload.course.id) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.postPastExam(payload)
    }
  }

  render () {
    return (
      <PastExams.Form
        {...this.state}
        fileUploadRef={this.fileUploadRef}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        updateSearchFilter={(filter) => this.setState({ searchFilter: { ...this.state.searchFilter, ...filter } })}
        onSearch={this.onSearch}
        onFileUpload={this.onFileUpload}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.pastExams.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postPastExam: (payload) => dispatch(postPastExam(payload)),
  postPastExamReset: () => dispatch(actions.pastExams.new.setStatus(FETCHING_STATUS.IDLE))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
