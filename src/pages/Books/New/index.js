
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { base64encode } from 'utilities'
import { FETCHING_STATUS } from 'utilities/constants'
import { postBook, postBookReset } from 'api/Actions/Books'
import Form from 'components/Book/Form'

const mapStateToProps = (state) => ({
  book: state.books.post.data,
  status: state.books.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postBook: (payload) => dispatch(postBook(payload)),
  postBookReset: () => dispatch(postBookReset())
})

class New extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        name: '',
        author: '',
        isbn: '',
        price: '',
        cover_image: '',
        condition: '',
        contact_way: ''
      },
      fileUploadStatus: 'none',
      uploadedImageUrl: null
    }
    this.formRef = React.createRef()
    this.imageUploadRef = React.createRef()
  }

  componentDidUpdate () {
    if (this.props.status === FETCHING_STATUS.DONE) {
      this.props.postBookReset()
      this.props.history.push(`/books/${this.props.book.id}`)
    }
  }

  onFileUpload () {
    this.setState({ fileUploadStatus: 'uploading' })
    const file = this.imageUploadRef.current.files[0]
    base64encode(file)
      .then(encoded => {
        this.setState({ ...this.state.payload, cover_image: encoded })
        this.setState({ fileUploadStatus: 'done' })
        this.setState({ uploadedImageUrl: URL.createObjectURL(file) })
      })
  }

  onSubmit (event) {
    let payload = this.state.payload
    // only works on chrome, but who care others? ;)
    this.formRef.current.reportValidity()

    // 檔案還沒上傳並編碼完前不送出
    if (this.state.fileUploadStatus === 'uploading') return

    if (payload.name && payload.author && payload.price && payload.condition && payload.contact_way) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.postBook(payload)
    }
  }

  render () {
    console.log(this.state.payload)
    return (
      <Form
        {...this.state}
        formRef={this.formRef}
        imageUploadRef={this.imageUploadRef}
        updatePayload={(payload) => this.setState({ payload: { ...this.state.payload, ...payload } })}
        onFileUpload={() => this.onFileUpload()}
        onSubmit={(event) => this.onSubmit(event)}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
