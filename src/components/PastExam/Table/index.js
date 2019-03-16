
import React from 'react'
import { connect } from 'react-redux'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import { deletePastExam } from 'api/Controllers/pastExams'
import { convertSemesterToString } from 'utilities'
import styles from './styles.scss'

class _Row extends React.Component {
  constructor (props) {
    super(props)
    this.handleDownload = this.handleDownload.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDownload () {
    if (window.confirm('確定下載此考古題嗎？')) {
      let file = document.createElement('a')
      file.href = `${SERVER_URL}${this.props.file.url}`
      file.target = '_blank'
      file.rel = 'noopener noreferrer'
      file.click()
    }
  }

  handleDelete () {
    if (window.confirm('確定刪除此考古題嗎?')) {
      this.props.deletePastExam(this.props.id)
    }
  }

  render () {
    const { course, uploader, description, anonymity, currentUser } = this.props
    return (
      <tr className={styles.row}>
        <td>{ course.name } / { course.teacher.join(',') }</td>
        <td>{ convertSemesterToString(course.semester) }</td>
        <td>{ description }</td>
        <td>{ anonymity ? '匿名' : uploader.name }</td>
        <td className='d-inline-block'>
          <button className='btn btn-success px-1 py-0' onClick={this.handleDownload}>
            <i className='fas fa-file-download' />
          </button>
          {
            // 是自己的考古題才有刪除按鈕
            currentUser && currentUser.id === uploader.id &&
            <button className='btn btn-danger px-1 py-0' onClick={this.handleDelete}>
              <i className='fa fa-trash' />
            </button>
          }
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  deletePastExam: (id) => dispatch(deletePastExam(id))
})

const Row = connect(mapStateToProps, mapDispatchToProps)(_Row)

const Table = (props) => (
  <div>
    <table className='table bg-white'>
      <thead>
        <tr>
          <th>課程/教授</th>
          <th>學期</th>
          <th>描述</th>
          <th>上傳者</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
          props.data.length
            ? props.data.map(pastExam => <Row {...pastExam} key={pastExam.id} />)
            : <tr className='text-center'>
              <td colSpan='5'>
                <Spinner size={48} color='grey' />
              </td>
            </tr>
        }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.updatePage} />
    </div>
  </div>
)

export default Table
