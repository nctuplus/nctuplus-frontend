
import React from 'react'
import { Col } from 'react-bootstrap'
import Pagination from '../Pagination'

const DiscussesTableRow = (props) => (
  <tr id={props.id} className='clickable'>
    <td className='ct_name'>{ `${props.course}/${props.teacher}` }</td>
    <td className='title'>{props.title}</td>
    <td className='hidden-xs user_name'>{props.user}</td>
    <td className='user_id hidden'>{props.user_id}</td>
    <td className='hidden-xs'>{props.update_time}</td>
  </tr>
)

const DiscussesTable = (props) => (
  <Col md={9}>
    <table className='table table-hover bg-white'>
      <thead>
        <tr className='clickable'>
          <th>課程</th>
          <th>標題</th>
          <th className='hidden-xs'>作者</th>
          <th className='hidden-xs'>時間</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((value, index) => (
            <DiscussesTableRow
              key={index}
              {...value}
            />)
          )
        }
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={props.page} max_page={props.max_page} to={props.update_page} />
    </div>
  </Col>
)

export { DiscussesTable, DiscussesTableRow }
