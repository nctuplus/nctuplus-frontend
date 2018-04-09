
import React from 'react'
import Pagination from '../Pagination'

const PastExamsTableRow = (props) => (
  <tr className='clickable' href={props.href}>
    <td>{`${props.course}/${props.teacher}`}</td>
    <td>{props.semester}</td>
    <td>{props.filename}</td>
    <td className='title'>{props.title}</td>
    <td className='user_name'>{props.user}</td>
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
        { props.children }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination />
    </div>
  </div>
)

export { PastExamsTable, PastExamsTableRow }
