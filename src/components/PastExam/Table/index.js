
import React from 'react'
import classNames from 'classnames'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import { convertSemesterToString } from 'utilities'
import styles from './styles.scss'

class Row extends React.Component {
  constructor (props) {
    super(props)
    this.download = this.download.bind(this)
  }

  download (url, fn) {
    if (window.confirm('確定下載此考古題嗎？')) {
      let file = document.createElement('a')
      file.href = url
      file.target = '_blank'
      file.rel = 'noopener noreferrer'
      // file.download = fn
      file.click()
    }
  }

  render () {
    const { file, course, uploader, description } = this.props
    return (
      <tr
        className={classNames('clickable', styles.row)}
        onClick={() => this.download(`${SERVER_URL}${file.url}`)}
      >
        <td>{ course.name } / { course.teacher.join(',') }</td>
        <td>{ convertSemesterToString(course.semester) }</td>
        <td>{ description }</td>
        <td>{ uploader }</td>
      </tr>
    )
  }
}

const Table = (props) => (
  <div>
    <table className='table bg-white'>
      <thead>
        <tr>
          <th>課程/教授</th>
          <th>學期</th>
          <th>描述</th>
          <th>上傳者</th>
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
