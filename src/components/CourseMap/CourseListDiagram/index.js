
import React from 'react'
import './style.scss'

const CourseListDiagram = props => (
  <div>
    <div className='row'>
      <div className='col-4'>
        <span>
          <div className='square-course mr-2' style={{ backgroundColor: '#0080FF' }} />
          基本必修
        </span>
      </div>
    </div>
    <table className='table'>
      <tbody>
        <tr className='grade text-center'>
          <th colSpan='2'>一年級</th>
          <th className='border-left-white' colSpan='2'>二年級</th>
          <th className='border-left-white' colSpan='2'>三年級</th>
          <th className='border-left-white' colSpan='2'>四年級</th>
        </tr>
        <tr className='semester text-center'>
          <th>上學期</th>
          <th className='semester-bordered'>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className='semester-bordered'>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className='semester-bordered'>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className='semester-bordered'>下學期</th>
        </tr>
      </tbody>
    </table>
  </div>
)

export default CourseListDiagram
