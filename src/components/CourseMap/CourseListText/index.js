
import React from 'react'
import './style.scss'

const CourseListText = props => (
  <div>
    <button className='btn btn-default'>展開互抵課程</button>
    <table className='table table-bordered mt-3'>
      <tbody>
        <tr className='course-required'>
          <td className='text-center' colSpan='5'>
            <h5>[必修] 需<strong>?</strong>學分</h5>
          </td>
        </tr>
        <tr className=''>
          <th className='text-center'>課名</th>
          <th className='text-center'>修課學期</th>
          <th className='text-center'>學分</th>
          <th className='text-center'>永久課號</th>
          <th className='text-center'>類別</th>
        </tr>
      </tbody>
    </table>
    <table className='table table-bordered mt-3'>
      <tbody>
        <tr className='course-elective'>
          <td className='text-center' colSpan='5'>
            <h5>[選修] 需<strong>?</strong>學分</h5>
          </td>
        </tr>
        <tr className=''>
          <th className='text-center'>課名</th>
          <th className='text-center'>修課學期</th>
          <th className='text-center'>學分</th>
          <th className='text-center'>永久課號</th>
          <th className='text-center'>類別</th>
        </tr>
      </tbody>
    </table>
  </div>
)

export default CourseListText
