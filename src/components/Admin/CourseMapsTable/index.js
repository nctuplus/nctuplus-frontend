
import React from 'react'

const DepartmentsTable = props => (
  <table className='table'>
    <thead>
      <tr >
        <th>標題</th>
        <th>適用之系所</th>
        <th>適用之入學年度</th>
        <th>建立者</th>
        <th>功能</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((courseMap, index) => (
          <tr key={index}>
            <td />
            <td />
            <td />
            <td>
              <select className='form-control' />
            </td>
            <td>
              <button className='btn btn-danger'>刪除</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default DepartmentsTable
