
import React from 'react'
import { Link } from 'react-router-dom'
import CourseConfig from '../config'

const Devider = ()=>(
  <span style={{padding:"0 2px", fontSize:'14'}}>｜</span>
)

const Item = (props) => (
  <tr>
    <td>
      <p>
        <Link to={`/courses/${props.id}`} >{ props.course_name } </Link>
        { props.category } { props.teacher }
        <span className='pull-right'>
          <button className='btn btn-info btn-circle'>
            <i className='fa fa-star' />
          </button>
          {' '}
          <button className='btn btn-warning btn-circle'>
            <i className='fa fa-minus' />
          </button>
        </span>
      </p>
      <p className='text-right'>
        <span className='d-inline-block'>{ props.requirement }</span><Devider/>
        <span className='d-inline-block'>年級: { props.grade } </span><Devider/>
        <span className='d-inline-block bold'>
          { `${props.class_time}/${props.classroom}` }
        </span><Devider/>
        <span className='d-inline-block bold'>
          <i className='fa fa-user' />{' '}
          { `${props.current_enroll}/${props.max_enroll}` }
        </span><Devider/>
        <span className='d-inline-block bold'>
          <i className='fa fa-graduation-cap' />{' '}
          { props.credit }
        </span>
      </p>
    </td>
  </tr>
)

const List = (props) => (
  <table className='table table-hover'>
    <thead>
      <tr>
        <th className={`bg-${CourseConfig[props.type].color}`}>
          { CourseConfig[props.type].chinese }
        </th>
      </tr>
    </thead>
    <tbody>
      { props.data.map((data, index) => <Item key={index} {...data} />) }
    </tbody>
  </table>
)

export default List
