
import React from 'react'
import styles from './style.scss'

const CourseListDiagram = props => (
  <div>
    <div className='row'>
      <div className='col-4'>
        <span>
          <div className={`${styles.squareCourse} mr-2`} style={{ backgroundColor: '#0080FF' }} />
          基本必修
        </span>
      </div>
    </div>
    <table className='table'>
      <tbody>
        <tr className={`${styles.grade} text-center`}>
          <th colSpan='2'>一年級</th>
          <th className='border-left-white' colSpan='2'>二年級</th>
          <th className='border-left-white' colSpan='2'>三年級</th>
          <th className='border-left-white' colSpan='2'>四年級</th>
        </tr>
        <tr className={`${styles.semester} text-center`}>
          <th>上學期</th>
          <th className={styles.semesterBordered}>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className={styles.semesterBordered}>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className={styles.semesterBordered}>下學期</th>
          <th className='border-left-white'>上學期</th>
          <th className={styles.semesterBordered}>下學期</th>
        </tr>
      </tbody>
    </table>
  </div>
)

export default CourseListDiagram
