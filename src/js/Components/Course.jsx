
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
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
import Pagination from './Pagination'

const CourseStatisticBlock = (props) => (
  <Col md={2} className="statistic-block text-center">
    <h1><strong>{props.value}</strong></h1>
    <span>{ props.children }</span>
  </Col>
)

const CourseStatistics = (props) => (
  <div>
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.chart_data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="胡正光" fill="#8884d8" />
          <Bar dataKey="N/A" fill="#82ca9d" />
          <Bar dataKey="洪意凌" fill="#AC1234" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <br />
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.chart_data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="胡正光" fill="#8884d8" />
          <Bar dataKey="N/A" fill="#82ca9d" />
          <Bar dataKey="洪意凌" fill="#AC1234" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <Row>
      <CourseStatisticBlock value={props.avg_score}>本課程平均成績</CourseStatisticBlock>
      <CourseStatisticBlock value={props.highest_score}>同類課程最高成績</CourseStatisticBlock>
      <CourseStatisticBlock value={props.teacher}>同類課程最高分老師</CourseStatisticBlock>
    </Row>
  </div>
)

class CourseTips extends React.Component {
  render () {
    return (
      <div className="panel-body">
        <i className="fa fa-cube" /> 作業/考試：<a>編輯</a>
        <div>
          考試週：（該週可能有考試）
          <div className="btn-group">
            {
              new Array(18).fill(0).map((value, index) =>
                <Button className="no-border" key={index}>{ index + 1 }</Button>
              )
            }
          </div>
          <br />
          作業週：（該週可能有作業）
          <div className="btn-group">
            {
              new Array(18).fill(0).map((value, index) =>
                <Button className="no-border" key={index}>{ index + 1 }</Button>
              )
            }
          </div>
          <br />
          <i className="fa fa-eye" />點名頻率：
          <span className="label label-success rollcall">不點名</span>
        </div>
        <hr />
        <i className="fa fa-cube" />其他內容：
        <a className="edit-lists">編輯</a>
        <Row className="hidden">
          <Col md={4}>
            <select className="form-control">
              <option value="1">[考試]</option>
              <option value="2">[作業]</option>
              <option value="3">[上課]</option>
              <option value="4">[其他]</option>
            </select>
          </Col>
          <Col md={7}>
            <input className="form-control" maxLength="32" type="text" />
          </Col>
          <Col md={1}>
            <Button bsStyle="success" className="btn-circle">
              <i className="fa fa-check" />
            </Button>
          </Col>
        </Row>
        <p className="text-center no-data"><strong>尚無資料</strong></p>
      </div>
    )
  }
}

const CourseIntro = (props) => (
  <tr>
    <td>{props.semester}</td>
    <td>{props.department}</td>
    <td>
      <a href={props.href} target="_blank">{props.course_id}</a>
    </td>
    <td>{props.course_type}</td>
    <td className="text-center">{props.current_enroll}/{props.max_enroll}</td>
    <td>{props.course_time}</td>
    <td>{props.classroom}</td>
    <td>{props.grade}</td>
    <td>{props.remark}</td>
  </tr>
)

const CourseIntroTable = (props) => (
  <h2 className="panel-title">
    <table className="table">
      <tbody>
        <tr>
          <td>學期</td>
          <td>單位</td>
          <td>課號</td>
          <td>選別</td>
          <td>修課人數/上限</td>
          <td>時間</td>
          <td>教室</td>
          <td>年級</td>
          <td className="col-md-4">備註</td>
        </tr>
        { props.children }
      </tbody>
    </table>
  </h2>
)

const CourseInfo = (props) => (
  <div>
    <table className="table-invisible">
      <tbody>
        <tr>
          <td>永久課號<strong>{props.permanent_id}</strong></td>
          <td>學分<strong>{props.credit}</strong></td>
        </tr>
        <tr>
          <td>
            <a href={props.href} target="_blank">課程綱要</a>
          </td>
          <td>
            查看更多<i className="fa fa-search-plus" />
          </td>
        </tr>
      </tbody>
    </table>
    <CourseIntroTable>{props.children}</CourseIntroTable>
  </div>
)

const CourseForum = (props) => (
  <div className="panel-body">
    <div className="well border-left-grey" >
      <h3 className="inline-block">
        <i className="fa fa-comment-o" />課程心得/討論
      </h3>
      <h4 className="inline-block">
        <Link to="/discuss/new">我要發文</Link>
      </h4>
    </div>
    <div>
      { props.children }
    </div>
  </div>
)

const CourseSection = (props) => (
  <Row>
    <div className="panel-heading">
      <div className="section-title">{ props.title }</div>
      { props.children }
    </div>
  </Row>
)

const CoursesTableRow = withRouter((props) => (
  <tr
    id={props.id}
    className="clickable"
    onClick={(e) => props.history.push(`/courses/${props.id}`)}
  >
    <td className="hidden-xs">{props.semester}</td>
    <td className="hidden-xs">{props.department}</td>
    <td>{props.name}</td>
    <td>{props.teachers}</td>
    <td>{props.credit}</td>
    <td>{props.course_time}</td>
    <td>{props.grade}</td>
    <td className="hidden-xs">
      <span>
        <i className="fa fa-square-o fa-2x" />
      </span>
    </td>
  </tr>
))

const CoursesTable = (props) => (
  <div>
    <table className="table table-hover bg-white">
      <thead>
        <tr>
          <th className="hidden-xs">學期</th>
          <th className="hidden-xs">系所/摘要</th>
          <th>課名</th>
          <th>老師</th>
          <th>學分</th>
          <th>時間</th>
          <th>年級</th>
          <th className="hidden-xs">收藏</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((value, index) => (
            <CoursesTableRow
              key = { index }
              { ...value }
            />)
          )
        } 
      </tbody>
    </table>
    <div className='text-center'>
      <Pagination page={ props.page } max_page={ props.max_page } to={ props.update_page } />
    </div>
  </div>
)

const CoursesListItem = (props) => (
  <tr>
    <td>
      <p>
        <Link to={`/courses/${props.id}`} >{ props.course_name }</Link>
        { props.category } { props.teacher }
        <span className="pull-right">
          <Button bsStyle="info" className="btn-circle">
            <i className="glyphicon glyphicon-star" />
          </Button>
          <Button bsStyle="warning" className="btn-circle">
            <i className="glyphicon glyphicon-minus" />
          </Button>
        </span>
      </p>
      <p className="text-right course-property">
        <span className="inline-block">{ props.requirement }</span>
        <span className="inline-block">年級: { props.grade } </span>
        <span className="inline-block bold">{ `${props.class_time}/${props.classroom}` }</span>
        <span className="inline-block bold"><i className="fa fa-user" />
          { `${props.current_enroll}/${props.max_enroll}` }</span>
        <span className="inline-block bold"><i className="fa fa-graduation-cap" />
          { props.credit }
        </span>
      </p>
    </td>
  </tr>
)
const CoursesList = (props) => (
  <table className="table table-hover courses-list">
    <thead>
      <tr>
        <th className={ `course-${props.type}` }>{ props.title }</th>
      </tr>
    </thead>
    <tbody>{ props.children }</tbody>
  </table>
)

export {
  CoursesTable,
  CoursesTableRow,
  CourseIntroTable,
  CourseIntro,
  CourseInfo,
  CourseTips,
  CourseStatistics,
  CourseSection,
  CourseForum,
  CoursesList,
  CoursesListItem
}
