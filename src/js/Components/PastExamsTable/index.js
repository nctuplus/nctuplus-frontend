
import React from 'react'
import { Col } from 'react-bootstrap'
import Pagination from '../Pagination'

const PastExamsTableRow = (props) => (
  <tr className='clickable' href={props.href} >
    <td className='col-md-3'>{ `${props.course}/${props.teacher}` }</td>
    <td className='col-md-1'>{ props.semester }</td>
    <td className='col-md-2'>{ props.filename }</td>
    <td className='title'>{ props.title }</td>
    <td className='user_name'>{ props.user }</td>
  </tr>
)

const PastExamsTable = (props) => (
  <Col md={9}>
    <table className='table table-hover bg-white'>
      <thead>
        <tr>
          <th className='col-md-3'>課程/教授</th>
          <th className='col-md-1'>學期</th>
          <th className='col-md-2'>檔名</th>
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
  </Col>
)

export { PastExamsTable, PastExamsTableRow }
