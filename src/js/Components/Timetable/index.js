
import React from 'react'

const rowName = 'MNABCDXEFGHYIJKL'
const week = [1, 2, 3, 4, 5, 6]

const Timetable = (props) => (
  <table className='table table-bordered'>
    <tbody>
      <tr>
        <th className='text-center'><i className='fa fa-bars' /></th>
        <th className='text-center'>Mon</th>
        <th className='text-center'>Tue</th>
        <th className='text-center'>Wed</th>
        <th className='text-center'>Thu</th>
        <th className='text-center'>Fri</th>
        <th className='text-center'>Sat</th>
      </tr>
      {
        Array.from(rowName).map((value, index) => (
          <tr key={index} >
            <td className='text-center'>{ value }</td>
            {
              week.map(day =>
                <td key={day} />
              )
            }
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default Timetable
