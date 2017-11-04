
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { SearchCourse } from '../../Components/Search'
import { CoursesList, CoursesListItem } from '../../Components/Course'
import Schedule from '../../Components/Schedule'

const required_courses = [
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  }
]
const general_courses = [
]
const foreign_courses = [
]

class Simulation extends React.Component {
  render () {
    return (
      <div className='page-wrapper simulation'>
        <div className='container'>
          <Row>
            <Col xs={12}>
              <div className='alert alert-warning com-cour-error'>
                <span className='bold'>Warning!</span> 因為學校真的很煩, 很抱歉目前識別新制通識的功能正在努力趕工中, 並且106學年度暫時無法搜尋通識的一當代五向度資料, 造成不便, 敬請見諒!
              </div>
            </Col>
            <Col md={6}>
              <div className='panel'>
                <div className='panel-heading bg-blue text-white'>
                  <h4 className='text-center'>
                    <span className='pull-left'>
                      <Button bsStyle='info' className='btn-circle panel-btn' >
                        <i className='fa fa-check' />
                      </Button>
                      <Button bsStyle='info' className='btn-circle panel-btn' >
                        <i className='fa fa-star' />
                      </Button>
                    </span>
                    課程查詢
                    <span className='pull-right'>
                      <Button bsStyle='info' className='btn-circle panel-btn' >
                        <i className='fa fa-question' />
                      </Button>
                    </span>
                  </h4>
                </div>
                <div className='panel-body'>
                  <Row className='courses-list-utils'>
                    <Col md={4} className='text-center no-padding'>
                      <div>
                        <Button className='inline-block'><i className='fa fa-book' /></Button>
                        <Button className='inline-block'><i className='fa fa-calendar' /></Button>
                        <Button className='inline-block'><i className='fa fa-graduation-cap' /></Button>
                      </div>
                    </Col>
                    <Col md={8} className='text-left no-padding'>
                      <SearchCourse />
                    </Col>
                  </Row>
                  <div className='scrollable'>
                    <CoursesList title='必修' type='required'>
                      {
                        required_courses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                    <CoursesList title='通識' type='general'>
                      {
                        general_courses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                    <CoursesList title='外語' type='foreign'>
                      {
                        foreign_courses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='panel schedule'>
                <div className='panel-heading bg-blue text-white'>
                  <h4 className='text-center'>
                    <Button bsStyle='info' className='btn-circle pull-left header-button'>
                      <span className='glyphicon glyphicon-share' />
                    </Button>
                    106上
                    <div className='pull-right header-button pop-over'>
                      <Button bsStyle='info' className='btn-circle dropdown-toggle'>
                        <i className='fa fa-download' />
                      </Button>
                      <ul className='dropdown-menu'>
                        <li><a href='/courses/export_timetable.xls?sem_id=22'>Excel</a></li>
                        <li />
                      </ul>
                    </div>
                  </h4>
                </div>
                <Schedule />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Simulation
