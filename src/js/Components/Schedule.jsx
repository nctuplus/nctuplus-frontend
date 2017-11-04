
import React from 'react'

const Schedule = (props) => (
  <table className='table table-bordered'>
    <tbody>
      <tr>
        <th><i className='fa fa-bars clickable-hover' /></th>
        <th className='col-md-2'><p className='text-center'>Mon</p></th>
        <th className='col-md-2'><p className='text-center'>Tue</p></th>
        <th className='col-md-2'><p className='text-center'>Wed</p></th>
        <th className='col-md-2'><p className='text-center'>Thu</p></th>
        <th className='col-md-2'><p className='text-center'>Fri</p></th>
        <th className='col-md-2'><p className='text-center'>Sat</p></th>
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>M</p>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>N</p>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>A</p></td>
        <td />
        <td />
        <td />
        <td className='pos-relative course-general'>樂曲創作一</td>
        <td className='pos-relative course-required'>體育－排球乙組</td>
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>B</p></td>
        <td />
        <td />
        <td className='pos-relative course-required'>計算機圖學概論</td>
        <td className='pos-relative course-general'>樂曲創作一</td>
        <td className='pos-relative course-required'>體育－排球乙組</td>
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>C</p></td>
        <td className='pos-relative course-required'>計算機圖學概論</td>
        <td />
        <td className='pos-relative course-required'>編譯器設計概論</td>
        <td className='pos-relative course-required'>網路程式設計概論</td>
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>D</p></td>
        <td className='pos-relative course-required'>計算機圖學概論</td>
        <td />
        <td className='pos-relative course-required'>編譯器設計概論</td>
        <td className='pos-relative course-required'>網路程式設計概論</td>
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>X</p></td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>E</p></td>
        <td />
        <td />
        <td />
        <td className='pos-relative course-general'>疾病知識與防治</td>
        <td className='pos-relative course-required'>微處理機系統實驗</td>
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>F</p></td>
        <td />
        <td />
        <td />
        <td className='pos-relative course-general'>疾病知識與防治</td>
        <td className='pos-relative course-required'>微處理機系統實驗</td>
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>G</p></td>
        <td className='pos-relative course-required'>網路程式設計概論</td>
        <td />
        <td />
        <td />
        <td className='pos-relative course-required'>編譯器設計概論</td>
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>H</p></td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>Y</p></td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>I</p></td>
        <td />
        <td />
        <td className='pos-relative course-required'>微處理機系統實驗</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>J</p></td>
        <td />
        <td />
        <td className='pos-relative course-required'>微處理機系統實驗</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>K</p>
        </td>
        <td className='' />
        <td />
        <td className='pos-relative course-required'>微處理機系統實驗</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td className='schedule-grid'>
          <p className='text-center'>L</p>
        </td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </table>
)

export default Schedule
