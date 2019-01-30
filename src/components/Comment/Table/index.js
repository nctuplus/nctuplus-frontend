
import React from 'react'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'

const CommentsTableRow = (props) => (
  <tr id={props.id} className='clickable'>
    <td>{ `${props.course.course_name}/${props.teacher}` }</td>
    <td>{props.title}</td>
    <td className='d-none d-table-cell'>{props.anonymity ? '匿名' : props.user.name}</td>
    <td className='d-none d-table-cell'>{props.created_at.slice(0, 10)}</td>
  </tr>
)

const CommentsTable = (props) => (
  <div>
    <table className='table table-sm table-hover bg-white'>
      <thead>
        <tr className='clickable'>
          <th>課程/教授</th>
          <th>標題</th>
          <th className='d-none d-table-cell'>作者</th>
          <th className='d-none d-table-cell'>時間</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.length
            ? props.data.map((comment) => (
              <CommentsTableRow key={comment.id} {...comment} />
            ))
            : <tr className='text-center'>
              <td colSpan='4'>
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

export default CommentsTable
