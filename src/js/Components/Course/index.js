
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

const CourseStatisticBlock = (props) => (
  <div className='col-md-2 text-center bg-white p-3 m-3 '>
    <h1><strong>{props.value}</strong></h1>
    <span>{ props.children }</span>
  </div>
)

const CourseStatistics = (props) => (
  <div>
    <div className='chart-wrapper'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={props.chart_data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <br />
    <div className='chart-wrapper'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={props.chart_data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className='row'>
      <CourseStatisticBlock value={props.avg_score}>本課程平均成績</CourseStatisticBlock>
      <CourseStatisticBlock value={props.highest_score}>同類課程最高成績</CourseStatisticBlock>
      <CourseStatisticBlock value={props.teacher}>同類課程最高分老師</CourseStatisticBlock>
    </div>
  </div>
)

class CourseTips extends React.Component {
  render () {
    return (
      <div className='panel-body'>
        <i className='fa fa-cube' /> 作業/考試：<a>編輯</a>
        <div>
          考試週：（該週可能有考試）
          <div className='btn-group'>
            {
              new Array(18).fill(0).map((value, index) =>
                <button className='btn btn-default no-border' key={index}>
                  { index + 1 }
                </button>
              )
            }
          </div>
          <br />
          作業週：（該週可能有作業）
          <div className='btn-group'>
            {
              new Array(18).fill(0).map((value, index) =>
                <button className='btn btn-default no-border' key={index}>
                  { index + 1 }
                </button>
              )
            }
          </div>
          <br />
          <i className='fa fa-eye' />點名頻率：
          <span className='label label-success rollcall'>不點名</span>
        </div>
        <hr />
        <i className='fa fa-cube' />其他內容：
        <a className='edit-lists'>編輯</a>
        <div className='row d-none'>
          <div className='col-4'>
            <select className='form-control'>
              <option value='1'>[考試]</option>
              <option value='2'>[作業]</option>
              <option value='3'>[上課]</option>
              <option value='4'>[其他]</option>
            </select>
          </div>
          <div className='col-7'>
            <input className='form-control' maxLength='32' type='text' />
          </div>
          <div className='col-1'>
            <button className='btn btn-success btn-circle'>
              <i className='fa fa-check' />
            </button>
          </div>
        </div>
        <p className='text-center no-data'><strong>尚無資料</strong></p>
      </div>
    )
  }
}


const CourseInfo = (props) => (
  <div className='row p-4'>
    <table className='table-invisible'>
      <tbody>
        <tr>
          <td>永久課號<strong>{props.permanent_id}</strong></td>
          <td>學分<strong>{props.credit}</strong></td>
        </tr>
        <tr>
          <td>
            <a href={props.href} target='_blank'>課程綱要</a>
          </td>
          <td>
            查看更多<i className='fa fa-search-plus' />
          </td>
        </tr>
      </tbody>
    </table>
    <table className='table'>
      <thead>
        <tr>
          <th>學期</th>
          <th>單位</th>
          <th>課號</th>
          <th>選別</th>
          <th>修課人數/上限</th>
          <th>時間</th>
          <th>教室</th>
          <th>年級</th>
          <th>備註</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.semester}</td>
          <td>{props.department}</td>
          <td>
            <a href={props.href} target='_blank'>{props.course_id}</a>
          </td>
          <td>{props.course_type}</td>
          <td className='text-center'>{props.current_enroll}/{props.max_enroll}</td>
          <td>{props.course_time}</td>
          <td>{props.classroom}</td>
          <td>{props.grade}</td>
          <td>{props.remark}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const CourseForum = (props) => (
  <div >
    <div className='border-left-grey bg-white p-5 my-5'>
      <h4 className='d-inline-block'>
        <i className='fa fa-comment-o' />課程心得/討論
      </h4>
      <h4 className='d-inline-block'>
        <Link to='/discuss/new'>我要發文</Link>
      </h4>
    </div>
    <div>
      { props.children }
    </div>
  </div>
)

const CoursesListItem = (props) => (
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
      <p className='text-right course-property'>
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

const CoursesList = (props) => (
  <table className='table table-hover courses-list'>
    <thead>
      <tr>
        <th className={`course-${props.type}`}>{ props.title }</th>
      </tr>
    </thead>
    <tbody>{ props.children }</tbody>
  </table>
)

export { CourseTable, CourseTableRow } from './CourseTable'

export {
  CourseInfo,
  CourseTips,
  CourseStatistics,
  CourseForum,
  CoursesList,
  CoursesListItem
}
