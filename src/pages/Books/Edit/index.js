
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { base64encode } from 'utilities'
import { FETCHING_STATUS } from 'utilities/constants'
import { getBook, patchBook, sellBook } from 'api/Controllers/books'
import actions from 'api/Actions/Books'
import Form from 'components/Book/Form'
import SearchList from 'components/Course/SearchList'
import { modal } from 'components/Modal'

const mapStateToProps = (state) => ({
  book: state.books.show.data,
  status: state.books.show.status,
  bookUpdateStatus: state.books.edit.status,
  bookSellStatus: state.books.sell.status
})

const mapDispatchToProps = (dispatch) => ({
  getBook: (id) => dispatch(getBook(id)),
  patchBook: (payload, id) => dispatch(patchBook(payload, id)),
  patchBookReset: () => dispatch(actions.books.edit.setStatus(FETCHING_STATUS.IDLE)),
  sellBook: (payload, id) => dispatch(sellBook(payload, id)),
  sellBookReset: () => dispatch(actions.books.sell.setStatus(FETCHING_STATUS.IDLE))
})

class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        name: '',
        authors: '',
        isbn: '',
        price: '',
        cover_image: '',
        info: '',
        contact_way: '',
        courses: []
      },
      courseSearchWord: '',
      synced: false,
      fileUploadStatus: 'none',
      uploadedImageUrl: null
    }
    this.formRef = React.createRef()
    this.imageUploadRef = React.createRef()
  }

  componentDidMount () {
    this.props.getBook(this.props.match.params.id)
  }

  componentDidUpdate () {
    if (this.props.status === FETCHING_STATUS.DONE && !this.state.synced) {
      this.setState({ payload: { ...this.state.payload, ...this.props.book } })

      if (this.props.book.cover_image) {
        this.setState({ uploadedImageUrl: `${SERVER_URL}${this.props.book.cover_image.url}` })
      }
      this.setState({ synced: true })
    }

    // 編輯完成
    if (this.props.bookUpdateStatus === FETCHING_STATUS.DONE) {
      this.props.patchBookReset()
      this.props.history.push(`/books/${this.props.book.id}`)
    }

    // 售出完成
    if (this.props.bookSellStatus === FETCHING_STATUS.DONE) {
      this.props.sellBookReset()
      this.props.history.push('/books/')
    }
  }

  onFileUpload () {
    this.setState({ fileUploadStatus: 'uploading' })
    const file = this.imageUploadRef.current.files[0]
    base64encode(file)
      .then(encoded => {
        this.setState({ payload: { ...this.state.payload, cover_image: encoded } })
        this.setState({ fileUploadStatus: 'done' })
        this.setState({ uploadedImageUrl: URL.createObjectURL(file) })
      })
  }

  onSearch (event) {
    if (this.state.courseSearchWord) {
      event.preventDefault()
      modal(
        <SearchList
          searchWord={this.state.courseSearchWord}
          addSearchCourse={(course) => this.addSearchCourse(course)}
          removeSearchCourse={(id) => this.removeSearchCourse(id)}
          findSearchCourse={(id) => this.findSearchCourse(id)}
        />
      )
    }
  }

  onSubmit (event) {
    let payload = this.state.payload
    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    // 檔案還沒上傳並編碼完前不送出
    if (this.state.fileUploadStatus === 'uploading') return

    if (payload.name && payload.authors && payload.price && payload.info && payload.contact_way) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.patchBook(payload, this.props.match.params.id)
    }
  }

  onSell () {
    // { status: 1 } 表示改為售出
    this.props.sellBook({ status: 1 }, this.props.match.params.id)
  }

  addSearchCourse (course) {
    let newCourses = [...this.state.payload.courses]
    newCourses.push(course)
    this.setState({ payload: { ...this.state.payload, courses: newCourses } })
  }

  removeSearchCourse (id) {
    let newCourses = [...this.state.payload.courses]
    let index = newCourses.findIndex(course => course.id === id)
    newCourses.splice(index, 1)
    this.setState({ payload: { ...this.state.payload, courses: newCourses } })
  }

  findSearchCourse (id) {
    let index = this.state.payload.courses.findIndex(course => course.id === id)
    return index !== -1
  }

  render () {
    return (
      <Form
        {...this.state}
        formType='edit'
        formRef={this.formRef}
        imageUploadRef={this.imageUploadRef}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        onFileUpload={() => this.onFileUpload()}
        updateSearchWord={(word) => this.setState({ courseSearchWord: word })}
        onSearch={(event) => this.onSearch(event)}
        onSubmit={(event) => this.onSubmit(event)}
        onSell={() => this.onSell()}
        removeSearchCourse={(id) => this.removeSearchCourse(id)}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
