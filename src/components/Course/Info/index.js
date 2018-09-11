
import React from 'react'
import { convertSemesterToString, convertTimeSlotsToString } from 'utilities'

const Info = (props) => (
  <div className='row p-4'>
    <table className='table-invisible'>
      <tbody>
        <tr>
          <td>永久課號<strong>{props.permanent_course.code}</strong></td>
          <td>學分<strong>{props.credit}</strong></td>
        </tr>
        <tr>
          <td>
            <a href={props.href} target='_blank'>課程綱要</a>
          </td>
          <td>
            查看更多<i className='fa fa-search-plus' />
          </td>
        </tr>
      </tbody>
    </table>
    <table className='table'>
      <thead>
        <tr>
          <th>學期</th>
          <th>單位</th>
          <th>課號</th>
          <th>選別</th>
          <th>修課人數/上限</th>
          <th>時間</th>
          <th>教室</th>
          <th>年級</th>
          <th>備註</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{convertSemesterToString(props.semester)}</td>
          <td>{props.department}</td>
          <td>
            <a href={props.href} target='_blank'>{props.code}</a>
          </td>
          <td>{props.requirement_type}</td>
          <td className='text-center'>{props.registration_count}/{props.registration_limit}</td>
          <td>{convertTimeSlotsToString(props.time_slots)}</td>
          <td>{props.classroom}</td>
          <td>{props.grade}</td>
          <td>{props.remark}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Info
