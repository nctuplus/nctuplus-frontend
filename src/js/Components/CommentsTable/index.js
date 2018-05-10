
import React from 'react'
import Pagination from '../Pagination'
import Spinner from '../Spinner'

const CommentsTableRow = (props) => (
  <tr id={props.id} className='clickable'>
    <td className='ct_name'>{ `${props.course}/${props.teacher}` }</td>
    <td className='title'>{props.title}</td>
    <td className='user_name d-none d-table-cell'>{props.user.name}</td>
    <td className='user_id d-none d-table-cell'>{props.user.id}</td>
    <td className='d-none d-table-cell'>{props.updated_at}</td>
  </tr>
)

const CommentsTable = (props) => (
  <div>
    <table className='table table-sm table-hover bg-white'>
      <thead>
        <tr className='clickable'>
          <th>課程</th>
          <th>標題</th>
          <th className='d-none d-table-cell'>作者</th>
          <th className='d-none d-table-cell'>時間</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.length
            ? props.data.map((value, index) => (
              <CommentsTableRow
                key={index}
                {...value}
              />)
            )
            : <tr className='text-center'>
              <td colSpan='4'>
                <Spinner size={48} color='grey' />
              </td>
            </tr>
        }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={props.page} max_page={props.max_page} to={props.update_page} />
    </div>
  </div>
)

export { CommentsTable, CommentsTableRow }
