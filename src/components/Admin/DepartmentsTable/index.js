
import React from 'react'
import { Link } from 'react-router-dom'

const DepartmentsTable = props => (
  <table className='table table-bordered bg-white'>
    <thead>
      <tr >
        <th>系名</th>
        <th>degree</th>
        <th>院</th>
        <th>有開課</th>
        <th>可主修</th>
        <th>管理</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((department, index) => (
          <tr key={index}>
            <td>{ department.name }</td>
            <td />
            <td />
            <td />
            <td />
            <td>
              <Link to={`/admin/departments/${department.id}/edit`}>
                <button className='btn btn-primary'>編輯</button>
              </Link>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default DepartmentsTable
