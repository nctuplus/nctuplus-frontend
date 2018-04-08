
import React from 'react'

const Courses = (props) => (
  <div className='bg-white'>
    <div className='row no-margin'>
      <div className='col-4 d-inline-block'>
        <h4 className='text-center'>103</h4>
        <table className='table table-bordered border-thick-gray'>
          <thead>
            <tr>
              <td className='text-center'>103暑</td>
              <td className='text-center'><i className='fa fa-graduation-cap' /></td>
              <td className='text-center'><i className='fa fa-flag-checkered' /></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>物理(一) | 物/化/生三選一</td>
              <td className='text-center'>4</td>
              <td className='text-center bold'>61</td>
            </tr>
            <tr>
              <td>訊息與碼的轉換與演進</td>
              <td className='text-center'>3</td>
              <td className='text-center'>
                <strong>82</strong></td>
            </tr>
            <tr className='info'>
              <td className='text-right'>共</td>
              <td className='text-center'>7</td>
              <td className='text-center'>70</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Courses
