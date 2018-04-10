
import React from 'react'

const CoursesYearlyStatistic = (props) => (
  <div className='col-12 col-md-6 col-lg-4'>
    <h4 className='text-center'>{ props.year }</h4>
    <table className='table table-bordered border-thick-gray'>
      <thead>
        <tr>
          <td className='text-center'>{ props.semaster }</td>
          <td className='text-center'><i className='fa fa-graduation-cap' /></td>
          <td className='text-center'><i className='fa fa-flag-checkered' /></td>
        </tr>
      </thead>
      <tbody>
        {
          props.courses.map((course, index) => (
            <tr>
              <td>{ course.name } | { course.property }</td>
              <td className='text-center'>{ course.credit }</td>
              <td className='text-center bold'>{ course.score }</td>
            </tr>
          ))
        }

        <tr className='info'>
          <td className='text-right'>共</td>
          <td className='text-center'>
            {
              /* all credit */
              props.courses.reduce((accum, course) => accum + course.credit)
            }
          </td>
          <td className='text-center bold'>
            {
              /* average score */
              props.courses.reduce((accum, course) => accum + course.score) / props.course.length
            }
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

const Courses = (props) => (
  <div className='bg-white'>
    <div className='row no-margin' >
      { 
        props.yearlyStatistics &&
        props.yearlyStatistics.map((data, index) => (
          <CoursesYearlyStatistic {...data} key={index}/>
        ))
      }
    </div>
  </div>
)

export default Courses
