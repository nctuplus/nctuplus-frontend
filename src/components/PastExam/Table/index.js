
import React from 'react'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import { convertSemesterToString } from 'utilities'

const Row = ({ file, course, uploader, description }) => (
  <tr className='clickable' onClick={() => window.open(`${SERVER_URL}${file.url}`)}>
    <td>
      { course.permanent_course.name }
      /
      { course.teachers.map(teacher => teacher.name).join(',') }
    </td>
    <td>{ convertSemesterToString(course.semester) }</td>
    <td>{ description }</td>
    <td>{ uploader.name }</td>
  </tr>
)

const Table = (props) => (
  <div>
    <table className='table table-sm table-hover bg-white'>
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
