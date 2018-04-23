
import React from 'react'
import Pagination from '../Pagination'
import Spinner from '../Spinner'

const PastExamsTableRow = (props) => (
  <tr className='clickable' href={props.href}>
    <td>{`${props.course}/${props.teacher}`}</td>
    <td>{props.semester}</td>
    <td>{props.file_name}</td>
    <td className='title'>{props.title}</td>
    <td className='user_name'>{props.user.name}</td>
  </tr>
)

const PastExamsTable = (props) => (
  <div>
    <table className='table table-sm table-hover bg-white'>
      <thead>
        <tr>
          <th>課程/教授</th>
          <th>學期</th>
          <th>檔名</th>
          <th>描述</th>
          <th>上傳者</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.length
          ? props.data.map((pastExam, index) => (
            <PastExamsTableRow {...pastExam} key={index} />
          ))
          : <tr className='text-center'>
            <td colSpan='5'>
              <Spinner size={48} color='grey' />
            </td>
          </tr>
        }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.max_page} to={props.update_page} />
    </div>
  </div>
)

export { PastExamsTable }
