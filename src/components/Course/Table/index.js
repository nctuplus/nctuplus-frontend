
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import { convertTimeSlotsToString, convertSemesterToString } from 'utilities'
import { FETCHING_STATUS } from 'utilities/constants'

const _Row = (props) => (
  <tr
    id={props.id}
    className='clickable'
    onClick={() => props.history.push(`/courses/${props.id}`)}
  >
    <td className='d-none d-table-cell pl-2' width='100px'>{convertSemesterToString(props.semester)}</td>
    <td width='300px'>{props.permanent_course.name}</td>
    <td width='105px'>
      {
        props.teachers
          .map(teacher => teacher.name)
          .join(', ')
      }
    </td>
    <td className='d-none d-table-cell' width='260px'>
      {props.department.name}{props.remarks ? ` / ${props.remarks}` : '' }
      <br />
      <span className='badge badge-success mr-1' data-toggle='tooltip' data-placement='bottom' title='自然/基礎(96 )'> 自然/基礎</span>
      <span className='badge badge-secondary mr-1' data-toggle='tooltip' data-placement='bottom' title='自然/基礎(96 )'> 通識校基本</span>
    </td>
    <td width='80px'>{props.credit}</td>
    <td width='130px'>{convertTimeSlotsToString(props.time_slots)}</td>
    <td width='80px'>{props.grade}</td>
    <td width='80px'><i className='fa fa-2x cart-control fa-square-o mx-auto' style={{ color: 'lightseagreen' }} /></td>
  </tr>
)

const Row = withRouter(_Row)

const Table = ({ data, status, page, maxPage, updatePage }) => {
  return status !== FETCHING_STATUS.DONE
    ? <div className='text-center'><Spinner size={48} color='grey' /></div>
    : <div>
      <table className='table table-sm table-hover bg-white'>
        <thead>
          <tr>
            <th className='pl-2'>學期</th>
            <th>課名</th>
            <th>老師</th>
            <th className='d-none d-table-cell'>系所/摘要</th>
            <th>學分</th>
            <th>時間</th>
            <th>年級</th>
            <th>收藏</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((course) => (<Row key={course.id} {...course} />))
          }
        </tbody>
      </table>
      <div className='text-center'>
        <Pagination page={page} maxPage={maxPage} to={updatePage} />
      </div>
    </div>
}

export default Table
