
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'components/Pagination'
import { convertTimeSlotsToString } from 'utilities'

const Row = withRouter((props) => (
  <tr
    id={props.id}
    className='clickable'
    onClick={() => props.history.push(`/courses/${props.id}`)}
  >
    <td className='d-none d-table-cell'>{props.semester}</td>
    <td className='d-none d-table-cell'>{props.department}</td>
    <td>{props.name}</td>
    <td>{props.teachers}</td>
    <td>{props.credit}</td>
    <td>{convertTimeSlotsToString(props.time_slots)}</td>
    <td>{props.grade}</td>
  </tr>
))

const Table = ({ data, page, maxPage, updatePage }) => (
  <div>
    <table className='table table-sm table-hover bg-white'>
      <thead>
        <tr>
          <th className='c'>學期</th>
          <th className='d-none d-table-cell'>系所/摘要</th>
          <th>課名</th>
          <th>老師</th>
          <th>學分</th>
          <th>時間</th>
          <th>年級</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((value, index) => (
            <Row key={index} {...value} />)
          )
        }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={page} maxPage={maxPage} to={updatePage} />
    </div>
  </div>
)

export default Table
