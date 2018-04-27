
import React from 'react'
import { Link } from 'react-router-dom'
import CourseConfig from '../config'

const CourseListItem = (props) => (
  <tr>
    <td>
      <p>
        <Link to={`/courses/${props.id}`} >{ props.course_name }</Link>
        { props.category } { props.teacher }
        <span className='pull-right'>
          <button className='btn btn-info btn-circle'>
            <i className='fa fa-star' />
          </button>
          <button className='btn btn-warning btn-circle'>
            <i className='fa fa-minus' />
          </button>
        </span>
      </p>
      <p className='text-right'>
        <span className='d-inline-block'>{ props.requirement }</span>
        <span className='d-inline-block'>年級: { props.grade } </span>
        <span className='d-inline-block bold'>
          { `${props.class_time}/${props.classroom}` }
        </span>
        <span className='d-inline-block bold'>
          <i className='fa fa-user' />
          { `${props.current_enroll}/${props.max_enroll}` }
        </span>
        <span className='d-inline-block bold'>
          <i className='fa fa-graduation-cap' />
          { props.credit }
        </span>
      </p>
    </td>
  </tr>
)

const CourseList = (props) => (
  <table className='table table-hover'>
    <thead>
      <tr>
        <th className={`bg-${CourseConfig[props.type].color}`}>
          { CourseConfig[props.type].chinese }
        </th>
      </tr>
    </thead>
    <tbody>
      {
      props.data.map((data, index) => <CourseListItem key={index} {...data} />)
    }
    </tbody>
  </table>
)

export { CourseList }
