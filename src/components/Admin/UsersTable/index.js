
import React from 'react'
import Pagination from 'components/Pagination'

const UsersTable = props => (
  <div>
    <table className='table'>
      <thead>
        <tr className='row'>
          <th className='col-2 text-center'>姓名</th>
          <th className='col-2'>帳號類型</th>
          <th className='col-3 text-center'>系所</th>
          <th className='col-1'>年級</th>
          <th className='col-1'>學分數</th>
          <th className='col-2 text-center'>身份</th>
          <th className='col-1' />
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((user, index) => (
            <tr className='row' key={index}>
              <td className='col-2'>{ user.name }</td>
              <td className='col-2'>{ user.provider }</td>
              <td className='col-3 text-center'>
                <select className='form-control'>
                  <option>請選擇</option>
                </select>
              </td>
              <td className='col-1'>{ user.admission_year }</td>
              <td className='col-1'>{ user.credit }</td>
              <td className='col-2 text-center'>
                <select className='form-control' value={user.role}>
                  <option value='0'>一般使用者</option>
                  <option value='1'>學校系辦單位</option>
                  <option value='2'>系統管理員</option>
                </select>
              </td>
              <td className='col-1' />
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className='text-center py-3'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.updatePage} />
    </div>
  </div>
)

export default UsersTable
